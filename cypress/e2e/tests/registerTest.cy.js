import { registerPage } from "../../pages/registerPage"
const registerObj=new registerPage()

import registerData from "../../fixtures/registerData.json"

describe('test automation',()=>{
    it('register flow',()=>{
        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPhoneNumber(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterCheckBox()
        registerObj.clickOnContinue()

    })
})