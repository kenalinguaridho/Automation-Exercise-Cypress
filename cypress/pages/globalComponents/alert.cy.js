export default class Alert {

    constructor(selector) {
        this.selector = selector
    }

    verifyAlert(text) {
        cy.get(this.selector).should('be.visible').and('contain.text', text)
    }
    
}