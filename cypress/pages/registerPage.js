
export class registerPage{


    weblocators={
        firstname:'#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckout:"input[type='checkbox']",
        continue:'.btn.btn-primary'

    }

    openUrl(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstname).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastname).type(LName)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterPhoneNumber(phoneNo){
        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    enterCheckBox(){
        cy.get(this.weblocators.policyCheckout).check()
    }

    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }

}