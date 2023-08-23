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
    return 'Correct'
  } else {
    return 'Incorrect'
  }
}

const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck.deck;
  // }
  // console.log(deck)
  // return deck.deck;
  // return cardObjArr
} 

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

const createRound = (deck, currentCardIndex = 0, turns = 0, incorrectGuesses = []) => {
  let round = {
    deck: deck,
    currentCard: currentCardIndex,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  round.currentCard = currentCardIndex
  return round;
}

const takeTurn = (guess, roundObj) => {
  roundObj.turns += 1;
  roundObj.currentCardIndex += 1;

  evaluateGuess(guess, round.Obj.currentCard)
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  takeTurn, 
  createRound
}

  // if (guess === correctAnswer) {
  //   console.log('Correct!')
  //   return card.correctAnswer;
  // } else {
  //   console.log('Incorrect!')
  //   return guess
  // }