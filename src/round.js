const { evaluateGuess } = require('../src/card');

const createRound = (deck) => {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
    startTime: null,
  }
  return round
}

const takeTurn = (guess, round) => {
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer)
  if(feedback === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
  }

  round.turns += 1
  round.currentCard = round.deck[round.turns]
  return feedback
  
}

const calculatePercentCorrect = (round) => {
  // number of guesses - number of incorrect guesses/number of guesses *100
  const percent = ((round.turns-round.incorrectGuesses.length)/round.turns)*100
  return percent
}

const endRound = (round) => {
  const percent = calculatePercentCorrect(round)
  const endOfRoundAnnouncement = `** Round over! ** You answered ${percent}% of the questions correctly!`
  console.log(endOfRoundAnnouncement)
  const endTime = new Date()
  const duration = endTime - round.startTime
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  console.log(`This took you ${minutes} minutes and ${seconds} seconds`);

  return endOfRoundAnnouncement
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}
