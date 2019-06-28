const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Data = require('../src/Data');
const Deck = require('../src/Deck');


class Round{
  constructor(deck) {
    this.deck = deck;
    // this.currentCard = this.currentCard;
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuess = [];
  }

  returnCurrentCard(){
    // this.currentCard = this.deck.cards[this.turns];
    return this.deck.cards[this.turns];
  }

  takeTurn(guess){
    const turn = new Turn(guess, this.deck.cards[this.turns])
    this.turns++
    if(turn.evaluateGuess() === false ){
      this.incorrectGuess.push(this.deck.cards[this.turns].id)
     
      return turn.giveFeedback();
    } else {
      // this.correctGuesses.push(this.deck.cards[this.turns].id)
      return turn.giveFeedback();
    }
      
  }

  calculatePercentCorrect() {
    const percentage = (this.correctGuesses.length / this.turns) * 100;

    return Math.round(percentage) + '%'
  }

  endRound(){
    return console.log(`** This round is over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
  }



}

module.exports = Round;