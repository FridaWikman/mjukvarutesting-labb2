import AddAnimal from '../../src/components/AddAnimal'

describe('<AddAnimal />', () => {
  it('Mounts AddAnimal-component, fills in form and click on submit-button. ', () => {
    const mockTypes = [{ id: 1, name: 'Elefant' }]

    cy.mount(<AddAnimal types={mockTypes} />)
    cy.get('#animal-name').type('Doris')
    cy.get('select').select('Elefant').should('have.value', 1)
    cy.get('#animal-weight').type('50 kg')
    cy.get('#animal-weight').should('have.value', '50 kg')
    cy.get('#animal-image').type(
      'https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg'
    )
    cy.get('#submit-button').click()
  })
})
