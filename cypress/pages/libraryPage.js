import libraryPageSelectors from '../selectors/library.sel'

function selectSubject(subject){
    cy.get(libraryPageSelectors.subjectDropdown).click()
    cy.get(libraryPageSelectors.subjectListItem).contains(subject).click()
}

function createStudySet(){
    cy.get(libraryPageSelectors.createStudySetButton).click()
}

module.exports = {
    selectSubject: selectSubject,
    createStudySet: createStudySet
}