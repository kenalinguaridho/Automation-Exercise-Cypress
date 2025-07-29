class Form {

    getForm(name) {
        return cy.get(name)
    }
    
}

export default new Form()