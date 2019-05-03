const Card = require('./Card');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectCardIds = [];
    this.percentage = 0;
  }

  returnCurrentCard(deck){
    if(this.deck.length === 3) {
      return this.deck.cards[0];
    } else if (this.deck.length === 2){
      return this.deck.cards[1];
    } else if (this.deck.length === 1){
      return this.deck.cards[2];
    } else {
      let round = new Round(deck);
    }
  }

  takeTurn(){
    let turn = new Turn(guess, card);
    increaseTurnCount();
    turn.evaluateGuess(guess, card); 
    turn.giveFeedback();
    returnCurrentCard();
  }

  increaseTurnCount(){
    this.turn++;
  }

  calculatePercentCorrect(){
     this.percentage = this.incorrectCardIds.length/3;
  }

  endRound(){
    return `** Round over! ** You answered ${this.percentage}% of the questions correctly!`
  }
}

module.exports = Round;