import homeSelectors from '../selectors/home.sel'
import loginSelectors from '../selectors/login.sel'
import userHelpers from '../apiHelpers/user'
import onboardingSelectors from '../selectors/onboarding.sel'
import userHomePageSelectors from '../selectors/userHomePage.sel'

function login(userName, userPassword) {
  cy.get(homeSelectors.loginLink).click()
  cy.get(loginSelectors.loginWithEmailLink).click()
  cy.get(loginSelectors.emailField).type(userName)
  cy.get(loginSelectors.passwordField).type(userPassword)
  return cy.get(loginSelectors.loginButton).click()
}

describe('Studysmarter page', () => {
  let userName = null;
  let userPassword = 'sydriv-4pipwo-Ducdax';

  before(function () {
    userName = userHelpers.registerUserTimestamp(userPassword)
  })

  beforeEach(function () {
    cy.visit('https://demo.studysmarter-test.de');
  })

  xit('should allow a registered user to log in', () => {
    login(userName, userPassword)

    cy.contains('Welcome to StudySmarter!')
    cy.contains('Get started')
  })

  it('should allow a logged in user to create a study set', () => {
    login(userName, userPassword)

    cy.get(onboardingSelectors.getStartedButton).click()
    cy.get(onboardingSelectors.userGroupButton).contains(onboardingSelectors.schoolText).click()
    cy.get(onboardingSelectors.schoolTypeButton).contains(onboardingSelectors.grundschuleText).click()
    cy.get(onboardingSelectors.classLevelOption).contains(onboardingSelectors.firstClassText).click()
    cy.get(onboardingSelectors.subjectOption).contains(onboardingSelectors.germanSubjectText).click()
    cy.get('button').contains('Continue').click()

    cy.contains('You’re all set, let’s go!')
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Continue').click()
    cy.get('button').contains('Got it').click()

    cy.get(userHomePageSelectors.createStudySetButton).click()
  })

  xit('should allow email registration via website', () => {
    cy.contains('Sign up with email').click()

  });
});
