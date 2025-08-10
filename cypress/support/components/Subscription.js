import Subscription from "../../pages/globalComponents/subscription.cy"
import Alert from "../../pages/globalComponents/alert.cy"
import Clickable from "../../pages/globalComponents/clickable.cy"

Cypress.Commands.add('ScrollToSubscription', () => {
    Subscription.scrollDown()
})

Cypress.Commands.add('Subscribe', (email) => {
    Subscription.inputSubscriptionEmail(email)
    new Clickable('button[id="subscribe"]').clickButton()
})

Cypress.Commands.add('VerifySubscribeAlert', () => {
    new Alert('#success-subscribe').verifyAlert('You have been successfully subscribed!')
})