import Animals from '../../src/components/Animals'

describe('<Animals />', () => {
  it('renders two animals, mount component and controls value of li element', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'http://localhost:3000/api',
      },
      {
        fixture: 'animals.json',
      }
    ).as('animals')

    cy.mount(<Animals />)
    cy.wait('@animals')

    cy.get('li').should('contain', 'Leif')
    cy.get('li').should('contain', 'Karl')
    cy.get('li').should('contain', 'Elefant')
    cy.get('li').should('contain', 'Giraff')
  })
})
