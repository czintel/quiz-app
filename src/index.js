import getElement from './utils/getElement.'

const answer = getElement('.js-answer')
const buttonHide = getElement('.js-button-hide')

const toggleBookmark = getElement('.js-toggle-bookmark')
const toggleBookmarkSelected = getElement('.js-toggle-bookmark-selected')

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

toggleBookmark.addEventListener('click', () => {
  toggleBookmark.classList.toggle('hidden')
  toggleBookmarkSelected.classList.toggle('hidden')
})

toggleBookmarkSelected.addEventListener('click', () => {
  toggleBookmark.classList.toggle('hidden')
  toggleBookmarkSelected.classList.toggle('hidden')
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
  button.classList.add('active')
}

function deactivateButtons() {
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}

function hideAllPages() {
  pageHome.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
}
