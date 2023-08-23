const createCard = (id, question, possibleAnswers, correctAnswer) => {
  return {
    id: id,
    question: question,
    possibleAnswers: possibleAnswers,
    correctAnswer: correctAnswer
  }
}

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
}

module.exports = {
  createCard,
  evaluateGuess
}