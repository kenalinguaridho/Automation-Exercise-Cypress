import '../support/homePage.js'
import '../support/components/navbar.js'
import '../support/components/Subscription.js'

describe('Subscription Feature', () => {
    
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
    })

    afterEach(() => {
        cy.VerifySubscribeAlert()
    })

    it('TC-010-Verify Subscription in home page', () => {
        cy.ScrollToSubscription()
        cy.Subscribe('test@mail.com')
    })

    it('TC-011-Verify Subscription in Cart Page', () => {
        cy.ClickNavbarMenu('Cart')
        cy.ScrollToSubscription()
        cy.Subscribe('test@mail.com')
    })

})