function initRoundController(deck) {
  return {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'correct!';
  }
  return 'incorrect!';
}

function takeTurn(guess, round) {
  const outcome = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (outcome === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.turns++;
  round.currentCard = round.deck[round.turns];

  return outcome;
}

function calculatePercentCorrect(round) {
  const numberCorrect = round.turns - round.incorrectGuesses.length;
  return Math.round((numberCorrect / round.turns) * 100);
}

function endRound(round) {
  const percentCorrect = calculatePercentCorrect(round);

  console.log(
    `** Round Over! ** You answered ${percentCorrect}% of the questions correctly!`,
  );
}

module.exports = {
  initRoundController,
  evaluateGuess,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
