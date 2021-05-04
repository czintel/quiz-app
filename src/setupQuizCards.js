import getElement from './utils/getElement'

export default function setupQuizCards() {
  const buttonQuizCard = getElement('.js-button-hide')
  const answer = getElement('.js-answer')

  buttonQuizCard.addEventListener('click', () => {
    answer.classList.toggle('hidden')
    buttonQuizCard.classList.toggle('mb30')
  })
}
