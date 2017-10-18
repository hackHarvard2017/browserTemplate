'use strict'
const store = require('./../store')

const signUpSuccess = (data) => {
  console.log("sign up success")
}

const signUpFailure = () => {
  console.log("sign up failed")
}

const signInSuccess = (data) => {
  console.log("sign in success")
}

const signInFail = () => {
  console.log("sign in failed")
}
const signOutSuccess = (data) => {
  console.log("sign out success")
}
const signOutFail = (data) => {
  console.log("sign out fail")
}

const changePasswordSuccess = (data) => {
  console.log("change password success")
}

const changePasswordFailure = () => {
  console.log("change password failure")
}

module.exports = {
  signInSuccess,
  signInFail,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFail,
  changePasswordFailure,
  changePasswordSuccess
}
