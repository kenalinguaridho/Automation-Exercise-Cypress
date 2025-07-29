import '../support/homePage.js'
import '../support/components/navbar'
import '../support/TestCases.js'

describe('Test Cases Feature Test', () => {
    it('TC-008-Verify Test Cases page', () => {
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
        cy.ClickNavbarMenu('Test Cases')
        cy.VerifyTestCasesPageVisibility()
    })
})