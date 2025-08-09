/// <reference types="cypress"/>
import { safeParse } from '../utils/stringToJSON'

class Products {

    visit() {
        return cy.visit('/products')
    }

    verifyProductsPage() {
        return cy.get('.features_items').contains('All Products').should('exist')
    }

    verifyProductList() {
        return cy.get('.product-image-wrapper > .single-products > .productinfo').should('exist').and('have.length.greaterThan', 0)
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
            // cy.log("BODY TYPE => " + typeof response.body);
            return response.body;
        });
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



}

export default new Products()