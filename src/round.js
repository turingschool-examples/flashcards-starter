function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: [],
    percentCorrect: 0
  }
  return round;
}

function evaluateGuess(guess, card) {
  if (guess === card.correctAnswer) {
    return 'Correct!';
  } else {
    return 'Incorrect!';
  }
}

function takeTurn(guess, round) {
  let result = evaluateGuess(guess, round.currentCard)
  if (result === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns++;
  round.currentCard = round.deck.cards[round.turns];
  round.percent = calculatePercentCorrect(round);
  return result;
}

function calculatePercentCorrect(round) {
  let averageScore = (round.turns - round.incorrectGuesses.length) / round.turns;
  let percentScore = Math.round(averageScore * 100);
  return percentScore;
}

// function endRound(round) {
//   console.log(round);
// }

module.exports = {
  createRound,
  takeTurn,
  evaluateGuess,
  calculatePercentCorrect,
  endRound
}