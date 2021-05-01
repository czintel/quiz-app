console.clear()

const answerHide1 = document.querySelector('.js-answer1')
const buttonHide1 = document.querySelector('.js-button-hide1')

buttonHide1.addEventListener('click', () => {
  answerHide1.classList.toggle('hidden')
  buttonHide1.classList.toggle('mb30')
})

const answerHide2 = document.querySelector('.js-answer2')
const buttonHide2 = document.querySelector('.js-button-hide2')

buttonHide2.addEventListener('click', () => {
  answerHide2.classList.toggle('hidden')
  buttonHide2.classList.toggle('mb30')
})

const activeBookmark = document.querySelector('.js-bookmark-active1')
const idleBookmark = document.querySelector('.js-bookmark-idle1')

activeBookmark.addEventListener('click', () => {
  activeBookmark.classList.add('hidden')
  idleBookmark.classList.remove('hidden')
})

idleBookmark.addEventListener('click', () => {
  activeBookmark.classList.remove('hidden')
  idleBookmark.classList.add('hidden')
})

const mainHome = document.querySelector('.js-page-home')
const mainBookmark = document.querySelector('.js-page-bookmark')
const mainCreate = document.querySelector('.js-page-create')
const mainProfile = document.querySelector('.js-page-profile')
const buttonHome = document.querySelector('.js-button-home')
const buttonBookmark = document.querySelector('.js-button-bookmark')
const buttonCreate = document.querySelector('.js-button-create')
const buttonProfile = document.querySelector('.js-button-profile')
const headerHome = document.querySelector('.js-header-home')
const headerBookmark = document.querySelector('.js-header-bookmark')
const headerCreate = document.querySelector('.js-header-create')
const headerProfile = document.querySelector('.js-header-profile')

buttonHome.addEventListener('click', () => {
  mainHome.classList.remove('hidden')
  headerHome.classList.remove('hidden')
  mainBookmark.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  headerCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
  headerProfile.classList.add('hidden')
})

buttonBookmark.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  headerHome.classList.add('hidden')
  mainBookmark.classList.remove('hidden')
  headerBookmark.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  headerCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
  headerProfile.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  headerHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  headerCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')
  headerProfile.classList.add('hidden')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  headerHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  headerCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')
  headerProfile.classList.remove('hidden')
})
