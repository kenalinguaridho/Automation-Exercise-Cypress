class Cart {
        
    getCart() {
        return cy.get('table[id="cart_info_table"] > tbody')
    }

    verifyCartProduct(product = {}) {
        this.getCart().should('contain.text', product.name)
        this.getCart().should('contain.text', product.price)
        this.getCart().should('contain.text', product.quantity)
        this.getCart().should('contain.text', product.price * product.quantity)
    }

}

export default new Cart()