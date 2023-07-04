function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

function evaluateGuess(guess, answer) {
  if (guess === answer) {
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
}

module.exports = {
  createCard,
  evaluateGuess
}