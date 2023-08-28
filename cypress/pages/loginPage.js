import loginSelectors from "../selectors/login.sel"

function login(userName, userPassword) {
  cy.get(loginSelectors.loginWithEmailLink).click()
  cy.get(loginSelectors.emailField).type(userName)
  cy.get(loginSelectors.passwordField).type(userPassword)
  cy.get(loginSelectors.loginButton).click()
}

module.exports = {
    login: login
}