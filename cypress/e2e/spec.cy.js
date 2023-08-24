import home from '../selectors/home.sel'
import userHelpers from '../apiHelpers/user'

describe('Studysmarter page', () => {
    it('should allow a registered user to log in', () => {
      userHelpers.registerUserTimestamp()
  })

    it('should allow email registration', () => {

      cy.visit('https://demo.studysmarter-test.de');
      cy.contains('Sign up with email').click()

    });
  });
  