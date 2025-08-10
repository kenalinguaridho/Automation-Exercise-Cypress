import '../support/homePage.js'
import '../support/Products.js'
import '../support/components/navbar.js'
import '../support/URL.js'

describe('Products Feature', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.HomePageVisibility()
        cy.ClickNavbarMenu('Products')
        cy.VerifyAllProductsVisibility()
    })

    it('TC-008-Verify All Products and product detail page', () => {
        const id = 1
        cy.ClickViewProduct(id)
        cy.VerifyURL(`/product_details/${id}`)
        cy.VerifyProductDetails(id)
    })

    it('TC-009-Search Product', () => {
        const product = 'Top'
        cy.TypeInputSearch(product)
        cy.ClickSearchButton()
        cy.VerifySearchedProducts(product)
    })
})