describe('Minizoo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('visits website, findes h2-element and check its content', () => {
    cy.get('#info-header').should('contain', 'Möt våra djur')
  })

  it('visits website and see if i data from database exists and array of data has length greater than 0', () => {
    cy.get('ul').should('have.length.greaterThan', 0)
    cy.get('li').should('contain', 'Brumma')
    cy.get('li').should('contain', 'kg')
    cy.get('#name-of-animal-types').should('contain', 'Brunbjörn')
    cy.get('select')
      .select(1)
      .should('have.value', 1)
      .should('contain', 'Elefant')
  })

  it('visits website, posts new animal to database, finds it in array fetched from database and then deletes it', () => {
    cy.get('#animal-name').type('Ville')
    cy.get('select').select('Brunbjörn')
    cy.get('#animal-weight').type('150 kg')
    cy.get('#animal-image').type(
      'https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg'
    )
    cy.get('#submit-button').click()
    cy.get('li').should('contain', 'Ville')
    cy.contains('Ville').parent().parent().find('#delete-button').click()
  })
})
