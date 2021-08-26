const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cardsInDeck.find(card => !card.hasBeenPlayed);
    this.cardInPlay = this.returnCurrentCard();
    this.feedback = '';
  }
  returnCurrentCard(){
    this.currentCard.hasBeenPlayed = true;
    return this.currentCard;
  }

  takeTurn(guess){
    this.turns++;
    let turn1 = new Turn(guess, this.cardInPlay);
    this.currentCard = this.deck.cardsInDeck.find(card => !card.hasBeenPlayed);
    this.feedback = turn1.giveFeedback();

    if(this.feedback === 'Incorrect!'){
      this.incorrectGuesses.push(this.cardInPlay.id)
      return this.feedback;
    }else if(this.feedback === 'Correct!'){
      return this.feedback;
    }
  }
};

module.exports = Round;
