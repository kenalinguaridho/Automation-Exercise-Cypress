import Form from './globalComponents/form.cy'
class LoginPage {

    visit() {
        return cy.visit('/login')
    }

    getLoginForm(formName) {
        return cy.get('#form').find(formName)
    }

    verifyLoginInput() {
        this.getLoginForm().contains('Login to your account').should('be.visible')
    }

    inputLoginForm(dataObj = {}) {
        this.verifyLoginInput()

        Form.getForm('input[data-qa=login-email]').type(dataObj.email)
        Form.getForm('input[data-qa=login-password]').type(dataObj.password)
    }

    verifyErrorMessage(formName, message) { 
        return this.getLoginForm(formName).contains(message).should('be.visible').invoke('attr', 'style').should('include', 'color: red')
    }

    

}

export default new LoginPage()