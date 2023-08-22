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
  let user = {
    guess: guess
  }
  return user;
}
  if(user.guess === card) {
    return 'Correct'
  }
    return user;

const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck;
} 

const countCards = (deckObj) => {
  return deckObj.length;
}

const createRound = (deck, currentCard, turns = 0, incorrectGuesses = []) => {
  let round = {
    deck: deck,
    currentCard: currentCard,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  return round
}

module.exports = {
  createCard,
  userGuess,
  evaluateGuess,
  createDeck,
  countCards
}

  // if (guess === correctAnswer) {
  //   console.log('Correct!')
  //   return card.correctAnswer;
  // } else {
  //   console.log('Incorrect!')
  //   return guess
  // }