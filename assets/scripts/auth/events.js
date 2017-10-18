'use strict'
const authUi = require('./authUi')
const authApi = require('./authApi')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUpSubmit = (e) => {
  const data = getFormFields(event.target)
  e.preventDefault()
  authApi.signUpRequest(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}
const onSignInSubmit = (e) => {
  const data = getFormFields(event.target)
  e.preventDefault()
  authApi.signInRequest(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}
const onSignOutClick = (e) => {
  e.preventDefault()
  authApi.signOutRequest()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}
const onChangePasswordSubmit = (e) => {
  const data = getFormFields(event.target)
  e.preventDefault()
  authApi.changePasswordRequest(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}
// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFaile text of the sign up modal
const modalEscapeSignUp = () => {
  // $('#SignUpFailure').text('')
  // $('#inputEmail4').val('')
  // $('#inputPassword4').val('')
}
// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFaile text of the sign in modal
const modalEscapeSignIn = () => {
  // $('#SignInFailure').text('')
  // $('#inputEmail3').val('')
  // $('#inputPassword3').val('')
}

// when a user clicks the 'x' to close a modal at any point this will clear the email/password/and signUpFail text of the sign in modal
const changePasswordEscape = () => {
  // $('#changePasswordFailure').text('')
  // $('#currentPassword').val('')
  // $('#newPassword').val('')
}

const addUserHandlers = function () {
  // $('.buttonCloseSignUp').on('click', modalEscapeSignUp)
  // $('.buttonCloseSignIn').on('click', modalEscapeSignIn)
  // $('.buttonCloseChangePassword').on('click', changePasswordEscape)
  $('#change-pwd').on('submit', onChangePasswordSubmit)
  $('#sign-up-form').on('submit', onSignUpSubmit)
  $('#sign-in-form').on('submit', onSignInSubmit)
  $('#sign-out').on('click', onSignOutClick)
}

module.exports = {
  addUserHandlers
}
