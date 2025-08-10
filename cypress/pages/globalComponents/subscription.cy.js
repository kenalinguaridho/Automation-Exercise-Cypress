class Subscription {

    getFooter() {
        return cy.get('footer')
    }

    scrollDown() {
        this.getFooter().scrollIntoView()
    }

    inputSubscriptionEmail(email) {
        this.getFooter().get('form > input[id="susbscribe_email"]').type(email)
    }

}

export default new Subscription()