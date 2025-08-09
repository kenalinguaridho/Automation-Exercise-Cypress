import Clickable from '../pages/globalComponents/clickable.cy'
import LeftSideBar from '../pages/globalComponents/leftSideBar.cy'
import Products from '../pages/Products.cy'

Cypress.Commands.add('VerifyAllProductsVisibility', () => {
    LeftSideBar.verifyBrandsExist()
    LeftSideBar.verifyBrandsList()
    LeftSideBar.verifyCategoryExist()
    LeftSideBar.verifyCategoryList()
    Products.verifyProductsPage()
    Products.verifyProductList()
})

Cypress.Commands.add('ClickViewProduct', (id) => {
    new Clickable(`a[href="/product_details/${id}"]`).clickByText('View Product')
})

Cypress.Commands.add('VerifyProductDetails', (id) => {
     Products.verifyProductDetails(id)
})
