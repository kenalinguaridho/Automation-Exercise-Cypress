import Wording from '../fixtures/wording.json'
import Navbar from '../pages/globalComponents/navbar.cy'
import ContactUs from '../pages/ContactUs.cy'

Cypress.Commands.add('NavigateToContactUs', () => {
    Navbar.clickMenu('Contact us')
})

Cypress.Commands.add('VerifyContactUsPageVisibility', () => {
    ContactUs.getContactUsContent(Wording.contact_us_content)
})

Cypress.Commands.add('InputContactUsForm', () => {
    ContactUs.inputContactUsForm(Wording.contact_us_input)
})

Cypress.Commands.add('SubmitContactUsForm', () => {
    ContactUs.submitContactUsForm()
})

Cypress.Commands.add('VerifySuccessMessage', () => {
    ContactUs.verifySuccessMessage()
})

Cypress.Commands.add('NavigateToHome', () => {
    ContactUs.navigateToHomeClick()
})