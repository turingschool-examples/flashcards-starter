const { evaluateGuess } = require("../src/turns");

const createRound = deck => ({
  deck: deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: [],
});

const takeTurn = (guess, round) => {
  let response = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (response === "incorrect!") {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns += 1   
  round.currentCard = round.deck[round.turns]
  if (round.turns === round.deck.length){
    return `${response} \n${endRound(round)}`
  } else { 
    return response
  }
};

const calculatePercentCorrect = (round) => {    
  return `${(100 - ((round.incorrectGuesses.length/round.turns) * 100).toFixed(2))}%`
}



const endRound = (round) => {
  return `** Round over! ** You answered ${calculatePercentCorrect(round)} of the questions correctly!`
};



module.exports = {
  createRound,
  takeTurn,
  endRound,
  calculatePercentCorrect
}