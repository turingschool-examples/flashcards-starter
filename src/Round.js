const Turn = require('../src/Turn');
const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns += 1;
    //console.log(this.deck)
    //this.deck.cards.shift();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);

    } return turn.giveFeedback();
  };
  calculatePercentCorrect() {
    //console.log(this.deck.cards.length);
    const cardCount = this.deck.countCards();
    const correct = cardCount - this.incorrectGuesses.length;
    const percentCorrect = (cardCount/correct) * 100;
    return percentCorrect
  };
  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% ofthe questions correctly!`
  }
}


module.exports = Round;
