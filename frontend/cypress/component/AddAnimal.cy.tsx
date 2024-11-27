import AddAnimal from '../../src/components/AddAnimal'

describe('<AddAnimal />', () => {
  it('mounts AddAnimal-component, types text in name-field, selects option in select and checks value, types text in weight-field, types text in image-field.', () => {
    cy.mount(<AddAnimal types={[]} />)
    cy.get('#animal-name').type('Doris')
    cy.get('select').select('Välj en typ').should('have.value', '')
    cy.get('#animal-weight').type('50 kg')
    cy.get('#animal-image').type(
      'https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg'
    )
  })
})
