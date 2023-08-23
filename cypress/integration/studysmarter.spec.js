// cypress/integration/googleTest.spec.js

describe('Google Test', () => {
    it('should open Google', () => {
      // Visit Google
      cy.visit('https://www.google.com');
  
      // Assert that the title contains "Google"
      cy.title().should('include', 'Google');
    });
  });
  