const Turn = require('../src/Turn');
const game = require('../src/Game');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');

class Round {
  constructor(deck, turn) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    }
    returnCurrentCard = (card) => {
      return this.deck[0];
    }
    takeTurn = (guess) => {     
      let currentCard = this.returnCurrentCard();
      let newTurn = new Turn(guess, currentCard);
      !newTurn.evaluateGuess() ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      this.turns++;
      return newTurn.giveFeedback();
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns* 100 ) ;
    }
    bonusRound = () =>{
      console.log(`**Bonus Round!!!**, redemption time!`)
      let newBigDeck = []
      this.incorrectGuesses.forEach(id =>{
       newBigDeck.push(prototypeQuestions.filter(x => x.id === id))
      })
      newBigDeck = new Deck([].concat(...newBigDeck))
      let newestRound = new Round(newBigDeck)
      util.main(newestRound)
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
module.exports = Round;