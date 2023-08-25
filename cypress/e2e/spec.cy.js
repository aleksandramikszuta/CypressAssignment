import home from '../selectors/home.sel'
import login from '../selectors/login.sel'
import userHelpers from '../apiHelpers/user'

describe('Studysmarter page', () => {
  let userName = null;
  let userPassword = 'sydriv-4pipwo-Ducdax';

  before(function() {
    userName = userHelpers.registerUserTimestamp(userPassword)
  })

  beforeEach(function() {
    cy.visit('https://demo.studysmarter-test.de');
  })

  it('should allow a registered user to log in', () => {
      cy.get(home.loginLink).click()
      cy.get(login.loginWithEmailLink).click()
      cy.get(login.emailField).type(userName)
      cy.get(login.passwordField).type(userPassword)
      cy.get(login.loginButton).click()

      cy.contains('Welcome to StudySmarter!')
      cy.contains('Get started')
  })

  it('should allow a logged in user to create a study set', () => {

  })

  it('should allow email registration via website', () => {      
      cy.contains('Sign up with email').click()

   });
});
  