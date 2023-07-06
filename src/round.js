function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
}

function takeTurn(guess, round) {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer);

  if(result === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id);
  }
  
  round.turns++;
  round.currentCard = round.deck[round.turns];

  return result;
}

function calculatePercentageCorrect(round) {
  return Math.round(100 - ((round.incorrectGuesses.length / round.turns) * 100));
}

function endRound(round) {
  return `** Round over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!";
  }

  return "incorrect!";
}

module.exports = {
  evaluateGuess,
  createRound,
  takeTurn,
  calculatePercentageCorrect,
  endRound
}
