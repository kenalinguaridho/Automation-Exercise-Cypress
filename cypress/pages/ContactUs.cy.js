import Form from './globalComponents/form.cy'

class ContactUs {

    getContactUs() {
        return cy.get('#contact-page')
    }

    getContactUsContent(titleList = []) {
        titleList.forEach(title => {
            this.getContactUs().contains(title).should('be.visible')
        })
    }

    getContactUsForm(id) {
        return Form.getForm(id)
    }

    inputContactUsForm(dataObj = {}) {
        this.getContactUsForm('input[data-qa=name]').type(dataObj.name)
        this.getContactUsForm('input[data-qa=email]').type(dataObj.email)
        this.getContactUsForm('input[data-qa=subject]').type(dataObj.subject)
        this.getContactUsForm('textarea[data-qa=message]').type(dataObj.message)
        this.getContactUsForm('input[name=upload_file]').click(30,20).selectFile('../Cypress-Automation/cypress/uploads/upload_test.jpg')
    }

    submitContactUsForm() {
        this.getContactUsForm('input[data-qa=submit-button]').click()
    }

    verifySuccessMessage() {
        return cy.get('.contact-form').contains('Success! Your details have been submitted successfully.')
    }

    navigateToHomeClick() {
        return this.getContactUsForm('#form-section > a').click()
    }

}

export default new ContactUs()