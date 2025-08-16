import '../support/homePage.js'
import '../support/Products.js'
import '../support/components/navbar.js'
import '../support/Cart.js'
import products from '../fixtures/products.json'

describe('Cart Feature', () => {
    
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
        cy.ClickNavbarMenu('Products')
    })

    it('TC-012-Add Poducts in Cart', () => {
        cy.AddProductToCart('first')
        cy.ClickContinueShopping()
        cy.AddProductToCart(5)
        cy.ProductToCart()
        products['products-tc-012'].forEach(product => {
            cy.VerifyProductInCart(product)
        })
    })

    it('TC-013-Verify Product uantity in Cart', () => {
        const id = 1
        cy.ClickViewProduct(id)
        cy.VerifyProductDetails(id)
        cy.AddSingleProductToCart(5)
        cy.ProductToCart()
        cy.VerifyProductInCart(products['product-tc-013'])
    })
})