describe('integration tests', () => {
  it('gets a list of animals using GET', () => {
    cy.request({
      method: 'GET',
      url: '/api',
    }).then((data) => {
      expect(data.body).to.be.an('array').length.greaterThan(0)
      cy.log(data.body)
    })
  })

  it('post animal', () => {
    cy.request({
      method: 'POST',
      url: '/api/post',
      body: {
        name: 'Karl',
        image:
          'https://cdn.pixabay.com/photo/2017/08/14/10/34/african-elephant-2640034_1280.jpg',
        type: 1,
        weight: '3000 kg',
      },
    })
  })
})
