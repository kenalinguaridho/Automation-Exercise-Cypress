class URLVisited {
    getURL(url) {
        return cy.url().should('eq', Cypress.config().baseUrl+url)
    }

    visit(url) {
        return cy.visit(Cypress.config().baseUrl+url)
    }
}

export default new URLVisited()