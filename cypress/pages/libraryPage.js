import libraryPageSelectors from '../selectors/libraryPage.sel'

function selectSubject(subject){
    cy.get(libraryPageSelectors.subjectDropdown).click()
    cy.get(libraryPageSelectors.subjectListItem).contains(subject).click()
}

module.exports = {
    selectSubject: selectSubject

}