const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turnNumber = 0;
    this.incorrectGuesses = [];
    this.turn;
  }
  
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn (guess, this.currentCard);
    this.turnNumber++;
    this.currentCard = this.deck.cards[this.turnNumber];
    if (this.turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      }
    return this.turn.giveFeedback();
    }  

  calculatePercentCorrect() {
    const percentage = this.incorrectGuesses.length/this.deck.cards.length;
    return (Math.floor(percentage * 100))
    }
    
    endRound() {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }   

module.exports = Round;