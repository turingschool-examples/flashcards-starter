const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round{
 constructor(cards){
   this.deck = new Deck(cards);
   this.incorrectGuesses = [];
   this.currentCard = this.deck.cards[0];
   this.turnCount = 0;
 }
  returnCurrentCard(){
    return this.currentCard;
  }
  takeTurn(){
    this.deck.cards.splice(0,1);
    this.turnCount +=1
    turn.evaluateGuess();
    //if evaluateGuess returns false, then push cards.id to incorrectGuesses
    turn.giveFeedback();



  }
}

module.exports = Round;
