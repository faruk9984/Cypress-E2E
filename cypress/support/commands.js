// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


///<reference types="Cypress" />



Cypress.Commands.add('login',(email,password)=>{
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input.btn.btn-primary').click()
})




Cypress.Commands.add('loginBasicAuth',()=>{
    cy.visit('https://authenticationtest.com/HTTPAuth/',{
        auth:{
            username:'user',
            password:'pass'
        }
    })
})




Cypress.Commands.add('verifyCountry',(county_code)=>{
    switch (county_code){
        case '/in/':
            return 'India'
        case '/uk/':
            return 'United Kingdom'
        case '/ae/':
            return 'United Arab Emirates'
        case '/ca/':
            return 'Canada (English)'
        default:
            return 'United Arab Emirates'

    }
 
})


