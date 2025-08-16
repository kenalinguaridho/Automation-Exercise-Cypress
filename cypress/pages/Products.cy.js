/// <reference types="cypress"/>
import { safeParse } from '../utils/stringToJSON'

class Products {

    visit() {
        return cy.visit('/products')
    }

    getProductSection() {
        return cy.get('.features_items')
    }

    verifyProductsPage() {
        return this.getProductSection().contains('All Products').should('exist')
    }

    verifySearchProductsPage() {
        return this.getProductSection().contains('Searched Products').should('exist')
    }

    getProductList() {
        return cy.get('.product-image-wrapper > .single-products > .productinfo')
    }

    getProductInformation() {
        return cy.get('.product-information')
    }

    fetchAllProducts() {
        return cy.request({
            method: "GET",
            url: "https://automationexercise.com/api/productsList"
        }).then((response) => {
            expect(response.status).to.eq(200);
            return response.body;
        });
    }

    fetchSearchedProduct(keyword) {
        return cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            form: true,
            body: {
                search_product: keyword
            }
        }).then((response) => {
            console.log("Response => ", response)
            return response.body
        })
    }

    verifyProductDetails(id) {
        return this.fetchAllProducts().then((responseBody) => {
            const body = safeParse(responseBody)
            const product = body.products.find((p) => p.id == id)
            const category = product.category.usertype.usertype + " > " + product.category.category

            this.getProductInformation().contains(product.name).should('exist')
            this.getProductInformation().contains(product.category.usertype.usertype).should('exist')
            this.getProductInformation().contains("Category: " + category).should('exist')
            this.getProductInformation().contains("Availability: In Stock").should('exist')
            this.getProductInformation().contains("Condition: New").should('exist')
            this.getProductInformation().contains(product.price).should('exist')
            this.getProductInformation().contains("Brand:" + " " + product.brand).should('exist')
        });
    }

    getInputSearch() {
        return cy.get('input[id="search_product"]')
    }

    getSearchedSelector() {
        return this.cy.get()
    }

    inputSearchProduct(name) {
        return this.getInputSearch().type(name)
    }

    verifySearchedProducts(keyword) {
        return this.fetchSearchedProduct(keyword).then((responseBody) => {
            const body = safeParse(responseBody)
            console.log(typeof body.products)
            console.log(body.products[0])
            body.products.forEach(product => {
                this.getProductList().contains(product.name).should('exist')
            })
        })
    }

    continueShopping() {
        return this.getProductSection().get('.modal-footer > button').click()
    }

}

export default new Products()