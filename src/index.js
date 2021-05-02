const answerHide = document.querySelector('.js-answer')
const buttonHide = document.querySelector('.js-button-hide')

buttonHide.addEventListener('click', () => {
  answerHide.classList.toggle('hidden')
  buttonHide.classList.toggle('mb30')
})

const toggleBookmark = document.querySelector('.js-toggle-bookmark')
const toggleBookmarkSelected = document.querySelector(
  '.js-toggle-bookmark-selected'
)

toggleBookmark.addEventListener('click', () => {
  toggleBookmark.classList.toggle('hidden')
  toggleBookmarkSelected.classList.toggle('hidden')
})

toggleBookmarkSelected.addEventListener('click', () => {
  toggleBookmark.classList.toggle('hidden')
  toggleBookmarkSelected.classList.toggle('hidden')
})

const mainHome = document.querySelector('.js-page-home')
const mainBookmark = document.querySelector('.js-page-bookmark')
const mainCreate = document.querySelector('.js-page-create')
const mainProfile = document.querySelector('.js-page-profile')
const buttonHome = document.querySelector('.js-button-home')
const buttonBookmark = document.querySelector('.js-button-bookmark')
const buttonCreate = document.querySelector('.js-button-create')
const buttonProfile = document.querySelector('.js-button-profile')

buttonHome.addEventListener('click', () => {
  mainHome.classList.remove('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})

buttonBookmark.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')
})
