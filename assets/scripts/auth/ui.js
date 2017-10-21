'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('.text-field-product').val('')
  $('#UiSuccess').text('').fadeIn('fast').delay(5000).fadeOut('slow')
}

const signUpFailure = () => {
  $('.sign-up-error-msg').text('Oops! Something went wrong! Please check required fields and try again!').fadeIn('fast').delay(3000).fadeOut('slow')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.logged-out').hide()
  $('.logged-in').show()
  $('.greeting').text('welcome back, ' + data.user.email)
}

const signInFailure = () => {
  $('.sign-in-error-msg').text('Oops! Something went wrong! Please check your username and password and try again!').fadeIn('fast').delay(3000).fadeOut('slow')
}

const changePasswordSuccess = (data) => {
  $('#changePwModal').modal('hide')
}

const changePasswordFailure = () => {
  $('.change-pw-error-msg').text('The password you entered is incorrect! Please try again.').fadeIn('fast').delay(3000).fadeOut('slow')
}

const signOutSuccess = (data) => {
  $('.logged-in').hide()
  $('.logged-out').show()
}

const signOutFailure = () => {
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
