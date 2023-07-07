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
  return deck.length;
}

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[],
    startTime: null,
  }
  return round;
}

function takeTurn(guess, round) {
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (feedback === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
    }
  round.turns += 1;
  round.currentCard = round.deck[round.turns]
  return feedback;
}

function calculatePercentCorrect(round) {
  return (round.turns - round.incorrectGuesses.length) / round.turns * 100
}

function endRound(round) {
  round.endTime = new Date()
  const elapsedTime = round.endTime - round.startTime
  const seconds = Math.floor(elapsedTime / 1000)
  const minutes = Math.floor(seconds / 60)
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly! It took you ${minutes} minutes and ${seconds} seconds to complete the game.`)
  return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!  It took you ${minutes} minutes and ${seconds} seconds to complete the game.`

}



module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
}