import User from '../fixtures/user.json'
import listMenuItems from '../fixtures/wording.json'
import '../support/SignupPage'
import '../support/LoginPage.js'
import '../support/homePage.js'
import '../support/components/navbar.js'

describe('Login Feature Test', () => {
    beforeEach(() => {
        cy.SignupViaAPI(User.validUser)
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
        cy.ClickNavbarMenu('Signup / Login')
        cy.VerifyLoginSignupPageVisibility()
    })

    it('TC-002-Login user with correct email and password', () => {
        cy.InputLogin(User.validUser)
        cy.LoginSignupClickButton('button[data-qa=login-button]', 'Login')
        cy.VerifyNavbarMenu(listMenuItems.loginMenuItems)
        cy.VerifyNavbarLoggedInAccount(User.validUser.name)
        cy.ClickNavbarMenu('Delete Account')
        cy.AccountDeletedVisibility()
    })

    it('TC-003-Login user with incorrect email and password', () => {
        cy.InputLogin(User.invalidUser)
        cy.LoginSignupClickButton('button[data-qa=login-button]', 'Login')
        cy.LoginSignupFormErrorMessage('.login-form', 'Your email or password is incorrect!')
    })

    it('TC-004-Logout User', () => {
        cy.InputLogin(User.validUser)
        cy.LoginSignupClickButton('button[data-qa=login-button]', 'Login')
        cy.VerifyNavbarMenu(listMenuItems.loginMenuItems)
        cy.VerifyNavbarLoggedInAccount(User.validUser.name)
        cy.ClickLogout()
        cy.VerifyLoginSignupPageVisibility()
    })
})