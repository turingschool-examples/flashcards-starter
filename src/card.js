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
createDeck(sampleData)

let countDeck = deck => {return deck.length}
countDeck(sampleData)



let createRound = data => {
  createDeck(sampleData)
  let round = {
    deck: data, 
    currentCard: data[0],
    turns: 0,
    incorrectGuesses:[],
    roundOver: false, 
    percentage: 0
  }
  return round
}
createRound(sampleData)


// const takeTurn = (guess, round) => {
//   let evaluate = evaluateGuess(guess, round.currentCard.correctAnswer);
//     if(evaluate === 'Incorrect!'){
//       round.incorrectGuesses.push(round.currentCard.id)
//    }
//     round.roundOver = true
//     round.turns += 1
//     round.percentage = calculatePercentCorrect(round)
//     round.currentCard = round.deck[round.turns]
//   return evaluate
// }

let calculatePercentCorrect = (round) => {
  round.percentage = (round.turns - round.incorrectGuesses.length)/round.turns * 100
 return round.percentage
}



module.exports = {
  createCard, 
  evaluateGuess,
  createDeck,
  countDeck, 
  createRound,
  // takeTurn,
  calculatePercentCorrect
}