import home from '../selectors/home.sel'

describe('Studysmarter page', () => {
    it('should allow email registration', () => {

      cy.visit('https://demo.studysmarter-test.de');
      cy.contains('Sign up with email').click()

    });
  });
  