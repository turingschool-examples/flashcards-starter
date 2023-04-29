const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer,
  }
}

const evaluateGuess = (guess, correctAnswer) => {
 if(guess === correctAnswer){
  return 'correct!'
 } else {
  return 'incorrect!'
 }
}

const createDeck = (cards) => {
 return cards
}

const countCards = (deck) => {
  return deck.length
}

const createRound = (deck) => {
  return {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
}

// const takeTurn = (guess, round) => {
//   round.currentCard = round.deck[round.turns];
//   round.turns += 1;

//   round.result = evaluateGuess(guess, round.currentCard.correctAnswer);

//   if(round.result === 'incorrect!'){
//     round.incorrectGuesses.push(round.currentCard.id);
//   }
// // console.log(round.result)
//   return round;
// }



module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound
}