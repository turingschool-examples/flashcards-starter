
function createRound(deck){

  var round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
  return round
}

function calculatePercentCorrect(round){
  var percentCorrect = -(Math.round(round.incorrectGuesses.length/round.turns*100) - 100)  
  return percentCorrect
}

function endRound(round){
return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}


module.exports = { 
  createRound,
  calculatePercentCorrect,
  endRound,
};