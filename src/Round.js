const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cardsInDeck.find(card => !card.hasBeenPlayed);
    this.cardInPlay = {};
    this.feedback = '';
    this.endRoundMsg = '';
  }
  returnCurrentCard(){
    this.currentCard.hasBeenPlayed = true;
    return this.currentCard;
  }

  takeTurn(guess){
    this.cardInPlay = this.returnCurrentCard();
    this.turns++;
    let turn1 = new Turn(guess, this.cardInPlay);
    this.feedback = turn1.giveFeedback();

    if(this.feedback === 'Incorrect!'){
      this.incorrectGuesses.push(this.cardInPlay.id)
      this.currentCard = this.deck.cardsInDeck.find(card => !card.hasBeenPlayed);
      return this.feedback;
    }else if(this.feedback === 'Correct!'){
      this.currentCard = this.deck.cardsInDeck.find(card => !card.hasBeenPlayed);
      return this.feedback;
    }
  }

  calculatePercentCorrect(){
    let numCorrect = (this.deck.cardsInDeck.length) - (this.incorrectGuesses.length);
    let decimalCorrect = numCorrect / this.deck.cardsInDeck.length;
    let roundedPercent = Math.round((decimalCorrect) * 100);
    return roundedPercent;
  }

  endRound(){
    this.endRoundMsg = '';
    let percentCorrect = this.calculatePercentCorrect();
    this.endRoundMsg = console.log(`**Round over!** You answered ${percentCorrect}% of the questions correctly!`);
  }
};

module.exports = Round;
