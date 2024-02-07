
describe('handle error status code in Cypress', () => {
    it.skip('Handle bad Request', () => {

        cy.request({
            method:'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.be.eq(404)

        })
 
    });
 
});