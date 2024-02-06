describe('Testing with Various Configuration Files', () => {
    it('Visits the Application Based on Config File', () => {
        // cy.visit('')
        // cy.log("print name: "+Cypress.env('username'))
        cy.visit(Cypress.env('stage_url'))

 

    });
});