import Form from './globalComponents/form.cy'

class SignupPage {

    clickButton(id, content) {
        return cy.get(id).contains(content).click()
    }

    verifySignupPageVisible(content) {
        return cy.get('.login-form').contains(content).should('be.visible')
    }

    verifySignupInput() {
        return cy.get('#form').find('.signup-form').contains('New User Signup!').should('be.visible')
    }

    verifyAccountCreated(content) {
        cy.get('#form').contains(content).should('be.visible')
    }

    verifyValueParsed(source, value) {
        return cy.get(source).should('have.value', value)
    }

    // This should input multiple input form
    // for signup-name and signup-email
    inputSignupForm(dataObj) {
        this.verifySignupInput()
        Form.getForm('input[data-qa=signup-name]').type(dataObj.name)
        Form.getForm('input[data-qa=signup-email]').type(dataObj.email)
    }

    inputAccountInformation(id, value) {
        return Form.getForm(id).type(value)
    }

    checkSignupButton(id) {
        return cy.get(id).check()
    }

}

export default new SignupPage()