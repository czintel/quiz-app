import getElement from './utils/getElement'

const answer = getElement('.js-answer')
const buttonHide = getElement('.js-button-hide')

const bookmark = getElement('.js-toggle-bookmark')
const bookmarkSelected = getElement('.js-toggle-bookmark-selected')

const pageHome = getElement('.js-page-home')
const pageBookmark = getElement('.js-page-bookmark')
const pageCreate = getElement('.js-page-create')
const pageProfile = getElement('.js-page-profile')

const buttonHome = getElement('.js-button-home')
const buttonBookmark = getElement('.js-button-bookmark')
const buttonCreate = getElement('.js-button-create')
const buttonProfile = getElement('.js-button-profile')

buttonHide.addEventListener('click', () => {
  answer.classList.toggle('hidden')
  buttonHide.classList.toggle('mb30')
})

bookmark.addEventListener('click', () => {
  toggleBookmark(bookmark, bookmarkSelected)
})

bookmarkSelected.addEventListener('click', () => {
  toggleBookmark(bookmark, bookmarkSelected)
})

buttonHome.addEventListener('click', navigateToHome)
buttonBookmark.addEventListener('click', navigateToBookmark)
buttonCreate.addEventListener('click', navigateToCreate)
buttonProfile.addEventListener('click', navigateToProfile)

function navigateToHome() {
  changePage(pageHome)
  selectButton(buttonHome)
}

function navigateToBookmark() {
  changePage(pageBookmark)
  selectButton(buttonBookmark)
}

function navigateToCreate() {
  changePage(pageCreate)
  selectButton(buttonCreate)
}

function navigateToProfile() {
  changePage(pageProfile)
  selectButton(buttonProfile)
}

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function selectButton(button) {
  deactivateButtons()
  button.classList.add('navbar__button--active')
}

function deactivateButtons() {
  buttonHome.classList.remove('navbar__button--active')
  buttonBookmark.classList.remove('navbar__button--active')
  buttonCreate.classList.remove('navbar__button--active')
  buttonProfile.classList.remove('navbar__button--active')
}

function hideAllPages() {
  pageHome.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
}

function toggleBookmark(state1, state2) {
  state1.classList.toggle('hidden')
  state2.classList.toggle('hidden')
}
