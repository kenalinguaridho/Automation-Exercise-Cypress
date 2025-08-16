import Cart from "../pages/Cart.cy"


Cypress.Commands.add('VerifyProductInCart', (product = {}) => {
    Cart.verifyCartProduct(product)
})