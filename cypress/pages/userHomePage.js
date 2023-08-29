import userHomeSel from "../selectors/userHome.sel";

function skipWhatsNew() {
    cy.get(userHomeSel.confirmWhatsNewButton).click()
}

function goToLibrary() {
    cy.get(userHomeSel.libraryButton).click()
}

module.exports = {
    skipWhatsNew: skipWhatsNew,
    goToLibrary: goToLibrary
}