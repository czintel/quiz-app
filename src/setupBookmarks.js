import getElement from './utils/getElement'

export default function setupBookmarks() {
  const bookmark = getElement('.js-toggle-bookmark')
  const bookmarkSelected = getElement('.js-toggle-bookmark-selected')

  bookmark.addEventListener('click', () => {
    toggleBookmark(bookmark, bookmarkSelected)
  })

  bookmarkSelected.addEventListener('click', () => {
    toggleBookmark(bookmark, bookmarkSelected)
  })

  function toggleBookmark(state1, state2) {
    state1.classList.toggle('hidden')
    state2.classList.toggle('hidden')
  }
}
