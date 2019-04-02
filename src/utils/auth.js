import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'
const UserId='userId'
const User ='user'
const AgencyRole = 'agencyrole'
const LoginSMS = 'loginsms'
const LoginSmsTime = 'loginsmstime'
const SignupSMS ='signupsms'
const SignupSmsTime = 'signupsmstime'
const PasswordSMS = 'passwordsms'
const Senior ='senior'
const Path = 'path'
const VipCard='vipcard'


export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getVipCard() {
  return Cookies.get(VipCard)
}
export function setVipCard(vipcard) {
  return Cookies.set(VipCard, vipcard)
}
export function removeVipCard() {
  return Cookies.remove(VipCard)
}



export function getPath() {
  return Cookies.get(Path)
}
export function setPath(path) {
  return Cookies.set(Path, path)
}
export function removePath() {
  return Cookies.remove(Path)
}




export function getSenior() {
  return Cookies.get(Senior)
}
export function setSenior(senior) {
  return Cookies.set(Senior, senior)
}
export function removeSenior() {
  return Cookies.remove(Senior)
}





export function getLoginSMS() {
  return Cookies.get(LoginSMS)
}
export function setLoginSMS(loginsms) {
  return Cookies.set(LoginSMS, loginsms)
}
export function removeLoginSMS() {
  return Cookies.remove(LoginSMS)
}




export function getSignupSMS() {
  return Cookies.get(SignupSMS)
}
export function setSignupSMS(signupsms) {
  return Cookies.set(SignupSMS, signupsms)
}
export function removeSignupSMS() {
  return Cookies.remove(SignupSMS)
}

export function getPasswordSMS() {
  return Cookies.get(PasswordSMS)
}
export function setPasswordSMS(passwordsms) {
  return Cookies.set(PasswordSMS, passwordsms)
}
export function removePasswordSMS() {
  return Cookies.remove(PasswordSMS)
}




export function getLoginSmsTime() {
  return Cookies.get(LoginSmsTime)
}
export function setLoginSmsTime(loginsmstime) {
  return Cookies.set(LoginSmsTime, loginsmstime)
}
export function removeLoginSmsTime() {
  return Cookies.remove(LoginSmsTime)
}




export function getSignupSmsTime() {
  return Cookies.get(SignupSmsTime)
}
export function setSignupSmsTime(signupsmstime) {
  return Cookies.set(SignupSmsTime, signupsmstime)
}
export function removeSignupSmsTime() {
  return Cookies.remove(SignupSmsTime)
}




export function getUserId() {
  return Cookies.getJSON(UserId)
}
export function setUserId(userId) {
  return Cookies.set(UserId, userId)
}
export function removeUserId() {
  return Cookies.remove(UserId)
}





export function getUser() {
  return Cookies.get(User)
}
export function setUser(data) {
  return Cookies.set(User, data)
}
export function removeUser() {
  return Cookies.remove(User)
}




export function getAgencyRole() {
  return Cookies.get(AgencyRole)
}
export function setAgencyRole(data) {
  return Cookies.set(AgencyRole, data)
}
export function removeAgencyRole() {
  return Cookies.remove(AgencyRole)
}
