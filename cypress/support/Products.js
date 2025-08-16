import Clickable from '../pages/globalComponents/clickable.cy'
import Hover from '../pages/globalComponents/hover.cy'
import Input from '../pages/globalComponents/input.cy'
import LeftSideBar from '../pages/globalComponents/leftSideBar.cy'
import Products from '../pages/Products.cy'

Cypress.Commands.add('VerifyAllProductsVisibility', () => {
    LeftSideBar.verifyBrandsExist()
    LeftSideBar.verifyBrandsList()
    LeftSideBar.verifyCategoryExist()
    LeftSideBar.verifyCategoryList()
    Products.verifyProductsPage()
    // Products.verifyProductList()
})

Cypress.Commands.add('ClickViewProduct', (id) => {
    new Clickable(`a[href="/product_details/${id}"]`).clickByText('View Product')
})

Cypress.Commands.add('VerifyProductDetails', (id) => {
     Products.verifyProductDetails(id)
})

Cypress.Commands.add('TypeInputSearch', (name) => {
    Products.inputSearchProduct(name)
})

Cypress.Commands.add('ClickSearchButton', () => {
    new Clickable('button[id="submit_search"]').clickButton()
})

Cypress.Commands.add('VerifySearchedProducts', (name) => {
    Products.verifySearchProductsPage()
    Products.verifySearchedProducts(name)
})

Cypress.Commands.add('AddProductToCart', (option) => {
    new Hover('.product-image-wrapper > .single-products').hoverFromList(option)
    new Clickable('.product-overlay > .overlay-content > a').clickFromList(option)
})

Cypress.Commands.add('ClickContinueShopping', () => {
    new Clickable('.modal-content > .modal-footer > button').clickButton()
})

Cypress.Commands.add('ProductToCart', () => {
    new Clickable('.modal-body > p > a').clickButton()
})

Cypress.Commands.add('AddSingleProductToCart', (text) => {
    new Input('input[id="quantity"]').clear()
    new Input('input[id="quantity"]').typeInput(text)
    new Clickable('span > button').clickButton()
})