const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'correct'
  } else {
    return 'incorrect'
  }
}

const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck.deck;
}    

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
}