export default class Input {

    constructor(selector) {
        this.selector = selector
    }

    getInput() {
        return cy.get(this.selector)
    }

    typeInput(text) {
        this.getInput().type(text)
    }

    clear() {
        this.getInput().clear()
    }

}