import URLVisited from '../pages/globalComponents/url.cy'
import TestCases from '../pages/TestCases.cy'

Cypress.Commands.add('VerifyTestCasesPageVisibility', ()=> {
    URLVisited.getURL('/test_cases')
    TestCases.getHeader()
    TestCases.getListTestCases()

})