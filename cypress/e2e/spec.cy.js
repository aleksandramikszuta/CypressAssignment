import homeSelectors from '../selectors/home.sel'
import loginSelectors from '../selectors/login.sel'
import userHelpers from '../apiHelpers/user'
import onboardingSelectors from '../selectors/onboarding.sel'
import userHomePageSelectors from '../selectors/userHomePage.sel'
import onboardingPage from '../pages/onboardingPage'

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

  it('should allow a registered user to log in', () => {
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
    onboardingPage.selectSubject(onboardingSelectors.germanSubjectText)
    cy.get('button').contains('Continue').click()

    cy.contains('You’re all set, let’s go!')
    onboardingPage.clickThroughTutorial()

    cy.get(userHomePageSelectors.createStudySetButton).click()
  })

  it('should allow email registration via website', () => {
    cy.contains('Sign up with email').click()

  });
});
