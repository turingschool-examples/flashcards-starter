const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    
    return turn.giveFeedBack();
  }
}


module.exports = Round;