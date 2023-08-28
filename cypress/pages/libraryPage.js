import libraryPageSelectors from '../selectors/library.sel'

function selectSubject(subject){
    cy.get(libraryPageSelectors.subjectDropdown).click()
    cy.get(libraryPageSelectors.subjectListItem).contains(subject).click()
}

function createStudySet(){
    cy.get(libraryPageSelectors.createStudySetButton).click()
}

function setStudySetName(name) {
    cy.get(libraryPageSelectors.studySetName).type(name)
}

function selectStudySetColor(colorName) {
    cy.get(libraryPageSelectors.colorSelect).get('div[data-color="' + colorName + '"]').click()
}

function confirmStudySetCreate() {
    cy.get(libraryPageSelectors.confirmStudySetCreate).click()
}

module.exports = {
    selectSubject: selectSubject,
    createStudySet: createStudySet,
    setStudySetName: setStudySetName,
    selectStudySetColor: selectStudySetColor,
    confirmStudySetCreate: confirmStudySetCreate 
}