const createCard = (id, question, answers, correctAnswer) => {
  const card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }

  return card;
}

const evaluateGuess = (guess, newCard) => {
  if(newCard.correctAnswer === guess){
    return 'correct!'
    } else {
    return 'incorrect!'
  }
}

module.exports = {
  createCard,
  evaluateGuess,
}