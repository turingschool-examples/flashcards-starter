var createCard = (questionNum, question, answers, correctAnswer) => {
  return {
    id: questionNum,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
}

let evaluateGuess = ((guess, correctAnswer) => {
  if(guess === correctAnswer){
    return 'correct!'
  } else {
    return 'incorrect!'
  }
}); 

const createDeck = (cards) => cards;

const countCards = (deck) => deck.length;

const createRound = (deck) => {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound
}