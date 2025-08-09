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

    testCasesClick(option) {
        const list = cy.get('section[id=form]').get('h4[class=panel-title] > a > u')

        if (option === 'first' || option === 'last') {
            list[option]().click()  
        } else if (typeof option === 'number') {
            list.eq(option-1).click()
        } else {
            throw new Error('Invalid option for button selection')
        }
    }

}

export default new TestCases()