import studySetDetailSelectors from '../selectors/studySetDetails.sel'

function assertColorEquals(colorName) {
    cy.get(studySetDetailSelectors.studySetColor).get('[data-color="' + colorName +'"]')
}

function assertNameEquals(studySetName) {
    cy.get(studySetDetailSelectors.studySetName).should('equal', studySetName)
}

module.exports ={
    assertColorEquals: assertColorEquals,
    assertNameEquals: assertNameEquals
}