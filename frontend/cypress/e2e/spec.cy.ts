describe('Minizoo', () => {
  it('visits website, findes h2 and check its content', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#info-header').should('contain', 'Möt våra djur')
  })
})
