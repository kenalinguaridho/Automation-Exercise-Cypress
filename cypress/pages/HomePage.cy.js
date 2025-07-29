class HomePage {
    visit() {
        return cy.visit('/')
    }
}

export default new HomePage()