import { homePage } from "../../pages/homePage";
const homePageObj=new homePage()

import testData from "../../fixtures/testData.json"


describe('template spec', () => {

    before(()=>{
        cy.login(testData.Login.username, testData.Login.password)

    })
    it('add to cart test', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName)
      
    })
  })
