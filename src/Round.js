const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turnNumber = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const newTurn = new Turn (guess, this.currentCard);
    this.turnNumber++;
    this.currentCard = this.deck.cards[this.turnNumber];
    if (newTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      }
    return newTurn.giveFeedback();
    }  

  calculatePercentCorrect() {
    const percentage = this.incorrectGuesses.length/this.deck.cards.length;
    return (Math.floor(percentage * 100))
    }
    
    endRound() {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }   

module.exports = Round;