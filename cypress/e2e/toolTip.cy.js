describe('Testing with Various Configuration Files', () => {
    it.skip('tool tip handle', () => {
        cy.visit('https://practice.expandtesting.com/tooltips')
        cy.get("#btn1").trigger('mouseover')
        cy.get('.tooltip-inner').should('be.visible').and('have.text','Tooltip on top')
        
    });

    it('tool tip handle', () => {
        cy.visit('https://open.spotify.com/')
        cy.get("[aria-label='Collapse Your Library']").trigger('mouseover')
        // cy.get('#hover-or-focus-tooltip').should('be.visible').and('have.text','Your Library')

 
        
    });
});