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
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[],
  }
  return round
}

function takeTurn(guess, round) {
  round.turns += 1;
  round.currentCard = round.deck[round.turns]
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  console.log('feedback: ', feedback)
  if (feedback === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
    }
  return round
}

function calculatePercentCorrect(round) {
  return (round.turns - round.incorrectGuesses.length) / round.turns * 100
}


module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
}