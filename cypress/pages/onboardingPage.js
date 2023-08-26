import onboardingSelectors from "../selectors/onboarding.sel"

function selectSubject(subjectName) {
    cy.get(onboardingSelectors.subjectOption).contains(subjectName).click()
}

function performInitialUserConfig() {
    cy.get(onboardingSelectors.getStartedButton).click()
    cy.get(onboardingSelectors.userGroupButton).contains(onboardingSelectors.schoolText).click()
    cy.get(onboardingSelectors.schoolTypeButton).contains(onboardingSelectors.grundschuleText).click()
    cy.get(onboardingSelectors.classLevelOption).contains(onboardingSelectors.firstClassText).click()
    selectSubject(onboardingSelectors.germanSubjectText)
    cy.get('button').contains('Continue').click()
}

function clickThroughTutorial() {
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Got it').click()

}
module.exports = {
    selectSubject: selectSubject,
    clickThroughTutorial: clickThroughTutorial,
    performInitialUserConfig: performInitialUserConfig
}