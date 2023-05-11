const { sampleData } = require("./sub-data");


let createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id:id, 
    question:question, 
    answers:answers, 
    correctAnswer:correctAnswer,
  }
  return card
};

let evaluateGuess = (guess, correctAnswer) => {
  if(correctAnswer === guess){
    return 'Correct!'
  } else {
    return 'Incorrect!' 
  }
};

let createDeck = data => {return data};

let countDeck = deck => {return deck.length}
  
let calculatePercentCorrect = (round) => {
  round.percentage = (round.turns - round.incorrectGuesses.length)/round.turns * 100
  return round.percentage
}

module.exports = {
  createCard, 
  evaluateGuess,
  createDeck,
  countDeck, 
  calculatePercentCorrect
}