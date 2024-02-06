describe('basicAuth Flow', () => {
 
  
    it('LOgin a website with basicAuth', () => {
        cy.visit('https://authenticationtest.com/HTTPAuth/',{
            auth:{
                username:'user',
                password:'pass'
            }
        })
        cy.contains("Login Success").should('be.visible')
    })


    it('2nd approach LOgin a website with basicAuth', () => {
        cy.visit('https://user:pass@authenticationtest.com/HTTPAuth/')
        cy.contains("Login Success").should('be.visible')
    })


    it('3rd approach',()=>{
        cy.loginBasicAuth()
        cy.contains("Login Success").should('be.visible')
    })



    it('LOgin a website with basicAuth environment variable', () => {
        cy.visit('https://authenticationtest.com/HTTPAuth/',{
            auth:{
                username:Cypress.env('username'),
                password:Cypress.env('password')
            }
        })
        cy.contains("Login Success").should('be.visible')
    })


  })