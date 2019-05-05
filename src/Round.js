const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');

class Round {
  constructor (deck, currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard(){
    this.currentCard = this.deck.cardArray.shift()
    return this.currentCard;
  }

  takeTurn(guess){
    if(guess === this.currentCard.correctAnswer){
      this.turns ++;
      return 'Correct!';
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      this.turns ++;
      return 'Incorrect!';
    }
  }

  newCurrentCard(){
    return this.returnCurrentCard()
  }

  calculatePercentCorrect(){
    return (this.turns / this.incorrectGuesses.length) * 100 
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the quesitons correctly!`)
  }
}

module.exports = Round;