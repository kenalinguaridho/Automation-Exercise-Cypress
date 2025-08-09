import URLVisited from '../pages/globalComponents/url.cy'

Cypress.Commands.add('VerifyURL', (url) => {
    URLVisited.getURL(url)
})