describe('Minizoo', () => {
  it('visits website, findes h2 and check its content', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#info-header').should('contain', 'Möt våra djur')
  })

  it('visit website and see if i data from database exists and array of data has length greater than 0', () => {
    cy.visit('http://localhost:5173/')
    cy.get('ul').should('have.length.greaterThan', 0)
    cy.get('li').should('contain', 'Brumma')
    cy.get('li').should('contain', 'kg')
    cy.get('#name-of-animal-types').should('contain', 'Brunbjörn')
    cy.get('select')
      .select(1)
      .should('have.value', 1)
      .should('contain', 'Elefant')
  })
})
