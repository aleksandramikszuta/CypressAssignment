import studySetDetailSelectors from '../selectors/studySetDetails.sel'

function assertColorEquals(colorName) {
    cy.get(studySetDetailSelectors.studySetColor).get('[data-color="' + colorName +'"]')
}

function assertNameEquals(studySetName) {
    cy.get(studySetDetailSelectors.studySetName).should('equal', studySetName)
}

function initiateFlashCardCreation() {
    cy.get(studySetDetailSelectors.createFlashCardButton).click()
}

module.exports ={
    assertColorEquals: assertColorEquals,
    assertNameEquals: assertNameEquals,
    initiateFlashCardCreation: initiateFlashCardCreation
}