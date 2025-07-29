import Navbar from '../pages/globalComponents/navbar.cy'
import URLVisited from '../pages/globalComponents/url.cy'
import SignupPage from '../pages/SignupPage.cy'
import Wording from '../fixtures/wording.json'
import APIRequest from '../pages/globalComponents/api.cy'

Cypress.Commands.add('NewUserSignupVisibility', () => {

})

Cypress.Commands.add('InputSignup', (dataObj = {}) => {
    SignupPage.inputSignupForm(dataObj)
})

Cypress.Commands.add('VerifyLoginSignupPageVisibility', () => {
    URLVisited.getURL('/login')
    Navbar.verifyNavbarMenu()
    Navbar.verifyActiveNavbarColor('Signup / Login')
})

Cypress.Commands.add('InputRegister', (dataObj = {}) => {
    SignupPage.verifyValueParsed('[data-qa="name"]', dataObj.name)
    SignupPage.verifyValueParsed('[data-qa="email"]', dataObj.email)
    SignupPage.inputAccountInformation('#password', dataObj.password)
    SignupPage.inputAccountInformation('#first_name', dataObj.firstname)
    SignupPage.inputAccountInformation('#last_name', dataObj.lastname)
    SignupPage.inputAccountInformation('#address1', dataObj.address1)
    SignupPage.inputAccountInformation('#address2', dataObj.address2)
    SignupPage.inputAccountInformation('#state', dataObj.state)
    SignupPage.inputAccountInformation('#city', dataObj.city)
    SignupPage.inputAccountInformation('#zipcode', dataObj.zipcode)
    SignupPage.inputAccountInformation('#mobile_number', dataObj.mobile_number)
    SignupPage.checkSignupButton('#newsletter')
    SignupPage.checkSignupButton('#optin')
})

// This command will be executed for every TC that need user authentication
Cypress.Commands.add('SilentRegister', (dataObj) => {
    URLVisited.visit('/login')
    SignupPage.inputSignupForm(dataObj)
    SignupPage.clickButton('button[data-qa=signup-button]', 'Signup')
    SignupPage.inputAccountInformation('#password', dataObj.password)
    SignupPage.inputAccountInformation('#first_name', dataObj.first_name)
    SignupPage.inputAccountInformation('#last_name', dataObj.last_name)
    SignupPage.inputAccountInformation('#address1', dataObj.address1)
    SignupPage.inputAccountInformation('#address2', dataObj.address2)
    SignupPage.inputAccountInformation('#state', dataObj.state)
    SignupPage.inputAccountInformation('#city', dataObj.city)
    SignupPage.inputAccountInformation('#zipcode', dataObj.zipcode)
    SignupPage.inputAccountInformation('#mobile_number', dataObj.mobile_number)
    SignupPage.checkSignupButton('#newsletter')
    SignupPage.checkSignupButton('#optin')
    SignupPage.clickButton('button[data-qa=create-account]', 'Create Account')
})

Cypress.Commands.add('SignupViaAPI', (dataUser = {}) => {
    APIRequest.post('/api/createAccount', dataUser)
})

Cypress.Commands.add('LoginSignupClickButton', (id, content) => {
    SignupPage.clickButton(id, content)
})

Cypress.Commands.add('AccountCreatedVisibility', () => {
    Wording.account_created.forEach(wording => {
        SignupPage.verifyAccountCreated(wording)
    })
})

Cypress.Commands.add('AccountDeletedVisibility', () => {
    Wording.account_deleted.forEach(wording => {
        SignupPage.verifyAccountCreated(wording)
    })
})

Cypress.Commands.add('ClickAccountCreatedContinue', () => {
    SignupPage.clickButton('#form', 'Continue')
})