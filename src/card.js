// each card has an id, a question, possible answers, and a correct answer
// evaluateGuess() function returns either correct or incorrect

function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!"
  } else {
    return "incorrect!"
  }
}

module.exports = {
  createCard,
  evaluateGuess
}