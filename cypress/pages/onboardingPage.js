import onboardingSelectors from "../selectors/onboarding.sel"

function selectSubject(subjectName) {
    cy.get(onboardingSelectors.subjectOption).contains(subjectName).click()
}
module.exports = {
    selectSubject: selectSubject
}