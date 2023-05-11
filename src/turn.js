
function takeTurn(guess, round){
  var result = evaluateGuess(guess, round.currentCard.correctAnswer)
  if (result === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns += 1
  round.currentCard = round.deck[round.turns]
  return result
}

function evaluateGuess(guess, correctAnswer){
  if (guess === correctAnswer){
    return 'correct!'
  } else
  return 'incorrect!'
  }

module.exports = { 
  evaluateGuess,
  takeTurn,
};