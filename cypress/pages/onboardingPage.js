import onboardingSelectors from "../selectors/onboarding.sel"

function selectSubject(subjectName) {
    cy.get(onboardingSelectors.subjectOption).contains(subjectName).click()
}

function clickThroughTutorial() {
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Got it').click()

}
module.exports = {
    selectSubject: selectSubject,
    clickThroughTutorial: clickThroughTutorial
}