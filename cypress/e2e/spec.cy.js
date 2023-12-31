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
import userHomePage from '../pages/userHomePage'

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

  it('should allow email registration via website', () => {
    cy.contains('Sign up with email').click()

  })

  it('should allow a logged in user to create a study set', () => {
    login(userName, userPassword)

    onboardingPage.performInitialUserConfig()

    cy.contains('You’re all set, let’s go!')
    onboardingPage.clickThroughTutorial()

    libraryPage.createStudySet("Test Studyset", "Deutsch", "mint")

    libraryPage.assertNameEquals("Test Studyset")
    libraryPage.assertColorEquals("mint")
  })
  
  it('should show a created flashcard', () => {
    login(userName, userPassword)

    userHomePage.skipWhatsNew()
    userHomePage.goToLibrary()
    libraryPage.goToStudySet("Test Studyset")
    studysetDetailsPage.initiateFlashCardCreation()

  });

});
