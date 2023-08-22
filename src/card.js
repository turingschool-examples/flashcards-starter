const createCard = (id, question, possibleAnswers, correctAnswer) => {
  return {
    id: id,
    question: question,
    possibleAnswers: possibleAnswers,
    correctAnswer: correctAnswer
  }
}

const evaluateGuess = (guess, answer) => {
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