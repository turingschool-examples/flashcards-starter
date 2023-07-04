function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
  return card;
}

function evaluateGuess(guess, correctAnswer) {
  // console.log('card: ', card)
  console.log('correctAnswer: ',correctAnswer)
  console.log('guess: ', guess)
  if (guess === correctAnswer) {
    return 'correct!';
  } else {
    return 'incorrect!';
  }
}

////// Iteration 2 /////////

function createDeck(cards) {

  return cards;
}

function countCards(deck) {
  return deck.length
}

function createRound(deck) {
  console.log('deck: ',deck)
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[],
  }
  return round
}





module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,

}