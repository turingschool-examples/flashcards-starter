const Turn = require('../src/Turn');
const util = require('./util');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.correctGuesses = 0
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns]; 
    this.reviewCards = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const turn = this.instantiateTurn(guess, this.currentCard)
    turn.evaluateGuess() ? this.guessTrue() : this.guessFalse();
    this.incrementTurn()
    return turn.giveFeedback()
  }

  incrementTurn() {
    this.turns += 1;
    this.currentCard = this.deck.cards[this.turns];
  }

  instantiateTurn(guess, card) {
    return new Turn(guess, card)
  }

  guessTrue() {
    this.correctGuesses += 1;
  }

  guessFalse() {
    this.incorrectGuesses.push(this.currentCard.id)
  }

  calculatePercentCorrect() {
    return Math.round((this.correctGuesses / this.deck.cards.length) * 100)
  }
  
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // if (this.incorrectGuesses.length === 0) {
    // // eslint-disable-next-line no-console
    //   console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    //   return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // } else {
    //   this.reviewIncorrect()
    //   // eslint-disable-next-line no-console
    //   console.log(`** Looks like you missed a few!`)
    //   return `** Looks like you missed a few!`
    // }
  }
  // reviewIncorrect() {
  //   this.deck.cards.filter(card => {
  //     this.incorrectGuesses.filter(x => {
  //       if (card.id === x) {
  //         this.reviewCards.push(card)
  //       } 
  //     })
  //   })
  //   console.log(this.deck)
  //   console.log(this.reviewCards)
  //   let deck = new Deck(this.reviewCards)
  //   this.deck = deck
  //   // this.turns = 0;
  //   // this.currentCard = this.deck.cards[0];
  //   util.main(this.round)
  //   // console.log(this.returnCurrentCard())
  // }

}



module.exports = Round;