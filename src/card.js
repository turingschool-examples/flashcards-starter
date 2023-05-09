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

const createDeck = subData => {
  console.log(subData)
  return subData
}

const countCards = deck => {
  return deck.length
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
}
