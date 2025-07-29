import Navbar from '../pages/globalComponents/navbar.cy'
import LoginPage from '../pages/LoginPage.cy'


Cypress.Commands.add('InputLogin', (dataObj = {}) => {
    LoginPage.inputLoginForm(dataObj)
})

Cypress.Commands.add('LoginClickButton', (id, content) => {
    SignupPage.clickButton(id, content)
})

Cypress.Commands.add('LoginSignupFormErrorMessage', (formName, message) => {
    LoginPage.verifyErrorMessage(formName, message)
})

Cypress.Commands.add('ClickLogout', () => {
    Navbar.clickMenu('Logout')
})