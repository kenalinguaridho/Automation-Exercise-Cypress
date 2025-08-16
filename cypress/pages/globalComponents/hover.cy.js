/// <reference types="cypress"/>
import "cypress-real-events"
export default class Hover {

    constructor (selector) {
        this.selector = selector
    }

    hoverFromList(option) {
        const list = cy.get(this.selector)

        if (option === 'first' || option === 'last') {
            // cy.get(this.selector).first().trigger('mouseover')
            list[option]().trigger('mouseover')
        } else if (typeof option === 'number') {
            list.eq(option-1).trigger('mouseover')
        } else {
            throw new Error('Invalid option for button selection')
        }
    }

    hoverByText(text) {
        cy.get(this.selector).contains(text).click()
    }

    hoverButton() {
        cy.get(this.selector).click()
    }

}