import '../support/homePage.js'
import '../support/SignupPage'
import '../support/LoginPage.js'
import '../support/components/navbar'
import user from '../fixtures/user.json'
import listMenuItems from '../fixtures/wording.json'

describe('Register Feature Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.HomePageVisibility()
  })

  it('TC-001-Register user', () => {
    cy.ClickNavbarMenu('Signup / Login')
    cy.VerifyLoginSignupPageVisibility()
    cy.InputSignup(user.validUser)
    cy.LoginSignupClickButton('button[data-qa=signup-button]', 'Signup')
    cy.InputRegister(user.validUser)
    cy.LoginSignupClickButton('button[data-qa=create-account]', 'Create Account')
    cy.AccountCreatedVisibility()
    cy.ClickAccountCreatedContinue()
    cy.VerifyNavbarMenu(listMenuItems.loginMenuItems)
    cy.VerifyNavbarLoggedInAccount(user.validUser.name)
    cy.ClickNavbarMenu('Delete Account')
    cy.AccountDeletedVisibility()
  })

  it('TC-005-Register user with existing email', () => {
    cy.SignupViaAPI(user.validUser)
    cy.ClickNavbarMenu('Signup / Login')
    cy.VerifyLoginSignupPageVisibility()
    cy.InputSignup(user.validUser)
    cy.LoginSignupClickButton('button[data-qa=signup-button]', 'Signup')
    cy.LoginSignupFormErrorMessage('.signup-form', 'Email Address already exist!')
  })
})