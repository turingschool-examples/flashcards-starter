const Deck = require("../src/Deck");
const Turns = require("./Turns");

class Round {
  constructor(decks) {
    this.deck = decks;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    const turn = new Turns(guess, this.returnCurrentCard());
    this.turns++;
    if (guess !== turn.currentCard.correctAnswer) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
//   calculatePercentCorrect() {
//     var percentage = (this.turns - this.incorrectGuesses.length)
//     const percentageCorrect =  percentage * 100;
//     return percentageCorrect;
//   }
  endRound() {
      //will need to call the calculatepercentage method is current
    const show = "** Round over! ** You answered 50% of the questions correctly!"
    console.log(show);
    return show
  }
}

module.exports = Round;
