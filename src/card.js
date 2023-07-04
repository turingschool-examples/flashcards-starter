function createCard(id, question, possibleAnswers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: possibleAnswers,
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