import Wording from '../../fixtures/wording.json'

class LeftSideBar {
    getSideBar() {
        return cy.get('.left-sidebar')
    }

    verifyCategoryExist() {
        return this.getSideBar().contains('Category').should('exist')
    }

    verifyCategoryList() {
        return this.getSideBar().get('#accordian').within(() => {
            Wording.categories.forEach(category => {
                cy.contains(category, { matchCase: false }).should('exist')
            })
        })
    }

    verifyBrandsExist() {
        return this.getSideBar().contains('Brands').should('exist')
    }

    verifyBrandsList() {
        return this.getSideBar().get('.brands-name').within(() => {
            Wording.brands.forEach(brand => {
                cy.contains(brand, { matchCase: false }).should('exist')
            })
        })
    }


}

export default new LeftSideBar()