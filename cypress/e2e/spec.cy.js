import homeSelectors from '../selectors/home.sel'
import homePage from '../pages/homePage'
import loginSelectors from '../selectors/login.sel'
import loginPage from '../pages/loginPage'
import userHelpers from '../apiHelpers/user'
import onboardingSelectors from '../selectors/onboarding.sel'
import libraryPageSelectors from '../selectors/library.sel'
import libraryPage from '../pages/libraryPage'
import onboardingPage from '../pages/onboardingPage'
import studysetDetailsPage from '../pages/studySetDetailsPage'

function login(userName, userPassword) {
  homePage.goToLoginPage()
  loginPage.login(userName, userPassword)
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

    onboardingPage.performInitialUserConfig()

    cy.contains('You’re all set, let’s go!')
    onboardingPage.clickThroughTutorial()

    libraryPage.createStudySet()
    libraryPage.selectSubject("Deutsch")
    libraryPage.setStudySetName("Test Studyset")
    libraryPage.selectStudySetColor("mint")
    libraryPage.confirmStudySetCreate()
    libraryPage.goToStudySet("Test Studyset")

    libraryPage.assertNameEquals("Test Studyset")
    libraryPage.assertColorEquals("mint")
  })

  it('should allow email registration via website', () => {
    cy.contains('Sign up with email').click()

  });


});
