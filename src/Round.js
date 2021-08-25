const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard(){
    return this.deck.cardsInDeck[0];
  }

  takeTurn(guess){
    this.turns++;
    let cardInPlay = this.returnCurrentCard();
    let turn1 = new Turn(guess, cardInPlay);
    turn1.evaluateGuess();

    if(turn1.evaluateGuess() === false){
      this.incorrectGuesses.push(cardInPlay.id);
      this.deck.cardsInDeck.splice(0, 1);
      return turn1.giveFeedback();
    }else{
      this.deck.cardsInDeck.splice(0, 1);
      return turn1.giveFeedback();
    }
  }
};

module.exports = Round;
