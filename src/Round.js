const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    //this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    // console.log(turn);
    // console.log("1", turn.guess);
    // console.log("2", turn.card);
    // console.log("3", turn.giveFeedback());
    // console.log("4", turn.evaluateCard());
    turn.evaluateCard();
    this.turns++;
    // if (turn.evaluateCard()) {
    //   // console.log("6", this.incorrectGuesses);
    //   //return true;
    //   return "Correct";
    // }
    if (!turn.evaluateCard()) {
      this.incorrectGuesses.push(this.returnCurrentCard());
      //console.log(this.returnCurrentCard().id);
      //return false;
      // return "Incorrect";
    }
    //console.log(turn.giveFeedback());
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let wins = this.turns - this.incorrectGuesses.length;
    let percent = parseFloat(((wins / this.turns) * 100).toFixed(2));
    // return Number.parseFloat(x).toFixed(2);
    return percent;
  }
  endRound() {
    return `Round over! You answered %${this.calculatePercentCorrect()}`;
  }
}

module.exports = Round;
