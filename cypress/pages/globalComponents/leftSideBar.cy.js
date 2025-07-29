class LeftSideBar {
    getSideBar() {
        return cy.get('.left-sidebar')
    }

    verifyCategoryExist() {
        return this.getSideBar().contains('Category').should('exist')
    }

    verifyCategoryList() {
        // This will be developed soon for verify UI components
    }

    verifyBrandsExist() {
        return this.getSideBar().contains('Brands').should('exist')
    }

    verifyBrandsList() {
        // This will be developed soon for verify UI components
    }


}

export default new LeftSideBar()