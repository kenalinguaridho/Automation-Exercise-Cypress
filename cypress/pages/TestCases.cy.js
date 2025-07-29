import Wording from '../fixtures/wording.json'

class TestCases {

    getContent() {
        return cy.get('section[id=form]')
    }

    getHeader() {
        return this.getContent().contains('Test Cases').should('be.visible')
    }

    getListTestCases() {
        Wording.test_cases_list.forEach(testCase => {
            this.getContent().contains(`Test Case ${testCase}`).should('be.visible')
        })
    }

}

export default new TestCases()