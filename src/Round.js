const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.card = new Card();
    this.deck = deck;
    this.turn = 0;
    this.incorrectCardIds = [];
    this.percentage = 0;
  }

  returnCurrentCard(deck){
    if(this.deck.cards.length === 3) {
      return this.deck.cards[0];
    } else if (this.deck.cards.length === 2){
      return this.deck.cards[1];
    } else if (this.deck.cards.length === 1){
      return this.deck.cards[2];
    } else {
      let round = new Round(deck);
    }
  }

  takeTurn(){
    let turn = new Turn(this.guess, this.card);
    this.increaseTurnCount();
    turn.evaluateGuess(this.guess, this.card); 
    turn.giveFeedback();
    this.calculatePercentCorrect();
    this.returnCurrentCard();
  }

  increaseTurnCount() {
    this.turn++;
  }

  calculatePercentCorrect() {
     return this.percentage = 100-Math.floor((this.incorrectCardIds.length/3)*100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.percentage}% of the questions correctly!`
  }
}

module.exports = Round;