// class NavBar {

//     verifyNavbarMenu() {
//         return cy.get('.navbar-nav')
//     }
//     verifyActiveNavbar(activeItem) {
//         return cy.get('.navbar-nav').contains(activeItem).invoke('attr', 'style')
//     }
// }

import listMenuItems from '../../fixtures/wording.json'

class NavBar {
    getMenu() {
        return cy.get('.navbar-nav')
    }

    singleMenuExist(item) {
        return this.getMenu().contains(item).should('exist')
    }

    clickMenu(item) {
        return this.singleMenuExist(item).click()
    }

    activeColor(item, color) {
        return cy.contains(item).invoke('attr', 'style').should('include', `color: ${color}`)
    }

    inactiveColor(item) {
        return cy.contains(item).should($element => {
            expect($element).to.not.have.attr('style')
        })
    }

    verifyActiveNavbarColor(activeItem) {
        this.getMenu().then(() => {
            listMenuItems.menuItems.forEach(item => {
                if (item === activeItem) {
                    this.activeColor(item, 'orange')
                } else {
                    this.inactiveColor(item)
                }
            })
        })
    }

    verifyNavbarMenu(listMenuItems=[]) {
        this.getMenu().within(() => {
            listMenuItems.forEach(menuItem => {
                cy.contains(menuItem).should('be.visible')
            });
        })
    }

    verifyLoggedInUser(name) {
        return this.getMenu().contains(`Logged in as ${name}`).should('be.visible')
    }

}

export default new NavBar()