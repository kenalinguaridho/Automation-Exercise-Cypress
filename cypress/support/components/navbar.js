import NavBar from '../../pages/globalComponents/navbar.cy'
import List from '../../fixtures/wording.json'

Cypress.Commands.add('ClickNavbarMenu', (menu) => {
    NavBar.singleMenuExist(menu)
    NavBar.clickMenu(menu)
})

Cypress.Commands.add('VerifyNavbarMenu', (listMenuItems = []) => {
    NavBar.verifyNavbarMenu(listMenuItems)
})

Cypress.Commands.add('VerifyNavbarLoggedInAccount', (name) => {
    NavBar.verifyLoggedInUser(name)
})