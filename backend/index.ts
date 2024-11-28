import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from 'pg'
import express from 'express'
import { Request, Response } from 'express'
import { Animal, Type } from '../shared/interfaces'

interface DeleteAnimal {
  id: number
}

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

const app = express()
app.use(express.json())

app.use(cors())

app.get('/api', async (_req: Request, res: Response) => {
  const { rows } = await client.query<Animal>(
    'SELECT animals.id, animals.name, animals.image, animals.weight, animal_types.name AS type_name FROM animals JOIN animal_types ON animal_types.id = animals.type'
  )

  res.send(rows)
})

app.get('/api/types', async (_req: Request, res: Response) => {
  const { rows } = await client.query<Type>('SELECT * FROM animal_types')

  res.send(rows)
})

app.post('/api/post', async (req: Request, res: Response) => {
  const { name, image, weight, type } = req.body as Animal
  try {
    const { rows } = await client.query<Animal>(
      'INSERT INTO animals (name, image, weight, type) VALUES ($1,$2,$3,$4) RETURNING *',
      [name, image, weight, type]
    )
    res.status(201).json(rows[0])
  } catch (error) {
    console.error('Error inserting data:', error)
    res.status(500).send('Server error')
  }
})

app.delete('/api/delete', async (req: Request, res: Response) => {
  const { id } = req.body as DeleteAnimal
  try {
    const { rows } = await client.query<DeleteAnimal>(
      'DELETE FROM animals WHERE id = $1',
      [id]
    )
    res.status(201).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error delete animal', error)
  }
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})
