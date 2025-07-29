import '../support/components/navbar.js'
import '../support/homePage.js'
import '../support/ContactUs.js'

describe('Contact Us Feature Test', () => {

    it('TC-006-Contact Us Form', () => {
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
        cy.ClickNavbarMenu('Contact us')
        cy.VerifyContactUsPageVisibility()
        cy.InputContactUsForm()
        cy.SubmitContactUsForm()
        cy.VerifySuccessMessage()
        cy.NavigateToHome()
    })

})