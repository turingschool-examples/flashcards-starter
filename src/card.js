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

const createRound = (deck, currentCardIndex = 0, turns = 0, incorrectGuesses = []) => {
  let round = {
    deck: deck,
    currentCardIndex: currentCardIndex,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  return round;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
}