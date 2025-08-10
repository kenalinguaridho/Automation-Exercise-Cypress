export default class Clickable {

    constructor (selector) {
        this.selector = selector
    }

    clickFromList(option) {
        const list = cy.get(this.selector)

        if (option === 'first' || option === 'last') {
            list[option]().click()  
        } else if (typeof option === 'number') {
            list.eq(option-1).click()
        } else {
            throw new Error('Invalid option for button selection')
        }
    }

    clickByText(text) {
        cy.get(this.selector).contains(text).click()
    }

    clickButton() {
        cy.get(this.selector).click()
    }

}