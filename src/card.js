function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
  return card
}

function evaluateGuess(guess, correctAnswer){
if (guess === correctAnswer){
  return 'correct!'
} else
return 'incorrect!'
}

function createDeck(cards){
var deck = cards
return deck
}

function countDeck(deck){
  return deck.length
}

function createRound(deck){

  var round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
  return round
}

function takeTurn(guess, round){
  var result = evaluateGuess(guess, round.currentCard.correctAnswer)
  if (result === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns += 1
  round.currentCard = round.deck[round.turns]
  return result
  }

function calculatePercentCorrect(round){
  var percentCorrect = Math.round(round.incorrectGuesses.length/round.turns*100)  
  return percentCorrect
}

function endRound(round){
return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = { 
  createCard,
  evaluateGuess,
  createDeck,
  countDeck,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};