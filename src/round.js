function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
    takeTurn: function(guess) {
      const result = evaluateGuess(guess, this.currentCard.correctAnswer);

      if(result === 'incorrect!'){
        this.incorrectGuesses.push(this.currentCard.id);
      }
      
      this.turns++;
      this.currentCard = deck[this.turns];

      return result;
    },
    calculatePercentageCorrect: function() {
      return Math.round(100 - ((this.incorrectGuesses.length / this.turns) * 100));
    },
    endRound: function(){
      return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
    }
  }
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!";
  }

  return "incorrect!";
}

module.exports = {
  evaluateGuess,
  createRound
}
