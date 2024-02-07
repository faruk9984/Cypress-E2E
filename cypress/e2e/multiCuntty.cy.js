
describe('Testing with multy county', () => {
    const county_code=['/ae/','/uk/','/in/','/ca/']

    it('multy county handle', () => {
        county_code.forEach((country) =>{
            cy.visit(`https://www.apple.com${country}`)
            cy.url().should('include',country)
            cy.verifyCountry(country).then((text)=>{
                cy.get("[title='Choose your country or region']").should('have.text',text)
            })

        })
 
    });

});