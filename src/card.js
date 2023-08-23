const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}

const evaluateGuess = (guess, cardObj) => {
  if (guess === cardObj.correctAnswer) {
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
  round.currentCard = deck[currentCardIndex]; // set current card
  return round;
}

// takeTurn function
  // takeTurn(guess, round)
  // increment turns 
  // evaluates guesses
  // gives feedback
  // stores id of incorrect guesses

  // Guess is evaluated. Incorrect guesses will be stored (via card’s the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct

const takeTurn = (guess, roundObj) => {
  roundObj.turns += 1;
  let guessResult = evaluateGuess(guess, roundObj.currentCard);
  let feedback;

  if (guessResult === 'incorrect') {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
    feedback = giveFeedback(guess, 'incorrect');
  } else {
    feedback = giveFeedback(guess, 'correct');
  }
  roundObj.currentCardIndex += 1; // move to next card
  roundObj.currentCard = roundObj.deck[roundObj.currentCardIndex] // update current card
  return feedback;
}

const giveFeedback = (guess, result) => {
  if (result === 'incorrect') {
    return `Your guess: ${guess} was wrong!`
  } else {
    return `Your guess: ${guess} was right!`
  }
}

const calculatePercentCorrect = (roundObj) => {
  let totalGuesses = roundObj.turns;
  let correctGuesses = (roundObj.turns - roundObj.incorrectGuesses.length);
  let correctPercentage = (correctGuesses / totalGuesses) * 100;
  return Math.floor(correctPercentage);
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  giveFeedback,
  calculatePercentCorrect,
}