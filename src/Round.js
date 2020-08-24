const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correct = true;
    }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.deck[0]);
    this.turnCount++;
    if (newTurn.giveFeedback() === 'correct!') {
      this.deck.shift();
      return newTurn.giveFeedback()
    } else {
      this.correct = false
      this.incorrectGuesses.push(this.deck[0].id)
      this.deck.shift();
      return newTurn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    var allIncorrect = this.incorrectGuesses.length;
    var percentIncorrect = allIncorrect / this.turnCount;
    var percentCorrect = 100 - (percentIncorrect * 100)
    return percentCorrect;
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return process.exit();
  }

}

//currentCARD





module.exports = Round
