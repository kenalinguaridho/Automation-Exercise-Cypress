class APIRequest {

    post(url, dataObj = {}) {
        cy.log("Sent payload => ", dataObj)
        return cy.request({
            method: 'POST',
            url: Cypress.config().baseUrl + url,
            form: true,
            body: dataObj
        })
    }

}

export default new APIRequest()