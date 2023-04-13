/*
This code will make a request to the specified API endpoint 'https://api.publicapis.org/entries' 
and then filter the objects in the response that have a "Category" property equal to 
"Authentication & Authorization". It will then count the number of objects found and log the count 
and the objects to the Cypress console.
*/ 

describe('Symphony API Test Task', () => {
  it('should find all objects with property Category: Authentication & Authorization', () => {
    cy.request('https://api.publicapis.org/entries').then((response) => {
      expect(response.status).to.eq(200)
      const data = response.body.entries
      const category = 'Authentication & Authorization'
      const foundObjects = data.filter((obj) => obj.Category === category)
      const count = foundObjects.length
      expect(count).to.be.greaterThan(0)
      cy.log(`Found ${count} objects with property ${category}`)
      cy.log(foundObjects)
    })
  })
})
