import HomePage from '../pages/homePage.cy'
import Navbar from '../pages/globalComponents/navbar.cy'
import URLVisited from '../pages/globalComponents/url.cy'
import LeftSideBar from '../pages/globalComponents/leftSideBar.cy'
import ListMenuItems from '../fixtures/wording.json'


Cypress.Commands.add('HomePage', () => {
    HomePage.visit()
    Navbar.verifyNavbarMenu(ListMenuItems.menuItems)
    Navbar.verifyActiveNavbarColor('Home')
})

Cypress.Commands.add('HomePageVisibility', () => {
    HomePage.visit()
    URLVisited.getURL('/')
    Navbar.verifyNavbarMenu(ListMenuItems.menuItems)
    Navbar.verifyActiveNavbarColor('Home')
    LeftSideBar.verifyCategoryExist()
    LeftSideBar.verifyBrandsExist()
})

Cypress.Commands.add('LoggedInHomePageVisibility', () => {
    URLVisited.getURL('/')
    Navbar.verifyNavbarMenu(ListMenuItems.loginMenuItems)
    LeftSideBar.verifyCategoryExist()
    LeftSideBar.verifyBrandsExist()
})