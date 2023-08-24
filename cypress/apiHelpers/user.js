function getRegisterUserBody(userEmail, userPassword) {
    return {
        "email": userEmail,
        "platform":"webapp",
        "language":"en-gb",
        "delayed_confirmation_possible":true,
        "university":null,
        "course_of_studies":null,
        "password": userPassword,
        "tracking_number":2631,
        "target_market":"core"
    }
}

function registerUser(userEmail, userPassword) {
    cy.request('POST', 'https://be.dev.studysmarter-test.de/users/', getRegisterUserBody(userEmail, userPassword)).then((response) => {
        expect(response.status).to.eq(201)
    })
}

function registerUserTimestamp() {
    const currentDate = new Date()
    const timeStamp = currentDate.getTime()
    const email = timeStamp.toString()+"@test.com"
    registerUser(email, 'sydriv-4pipwo-Ducdax')
}

module.exports = {
    registerUserTimestamp: registerUserTimestamp
}