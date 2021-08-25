const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard(){
    const currentCard = this.deck.cardsInDeck.find(function(card){
      return !card.hasBeenPlayed;
    });
    return currentCard;
  }

  takeTurn(guess){
    this.turns++;
    let cardInPlay = this.returnCurrentCard();
    cardInPlay.hasBeenPlayed = true;
    let turn1 = new Turn(guess, cardInPlay);
    turn1.evaluateGuess();

    if(turn1.evaluateGuess() === false){
      // cardInPlay.hasBeenPlayed = true;
      this.incorrectGuesses.push(cardInPlay.id);
      return turn1.giveFeedback();
    }else if(turn1.evaluateGuess() === true){
      // cardInPlay.hasBeenPlayed = true;
      console.log(cardInPlay);
      return turn1.giveFeedback();
    }
  }
};

module.exports = Round;
