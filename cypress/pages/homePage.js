import homePageSelectors from "../selectors/home.sel"

function goToLoginPage() {
    cy.get(homePageSelectors.loginLink).click()
}

module.exports = {
    goToLoginPage: goToLoginPage
}