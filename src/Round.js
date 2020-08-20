const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    }
    returnCurrentCard = () => {
      this.currentCard = this.deck[0]
      return this.currentCard
    }
    takeTurn = (guess) => {   
      this.guess = guess;
      return this.createTurn();
    }
    createTurn = () =>{
      this.turn = new Turn(this.guess, this.currentCard);
      return this.evaluateGuess();
    }
    evaluateGuess = () =>{
      this.result = this.turn.evaluateGuess();
      return this.handleResult();
    }
    handleResult = () =>{
      !this.result ? this.incorrectGuesses.unshift(this.currentCard.id) : null;
      return this.shiftDeck();
    }
    shiftDeck = () =>{
      this.deck.shift();
      return this.incrementTurn();
    }
    incrementTurn = () =>{
      this.turns++;
      return this.turn.giveFeedback();
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100 ) ;
    }
    bonusRound = () =>{
      let newestRound = new Round(this.createBonusDeck());
      util.main(newestRound);
    }
    createBonusDeck = () => {
      this.populateBonusDeck();
      return this.deck = new Deck([].concat(...this.deck));
    }
    populateBonusDeck = () => {
        this.incorrectGuesses.forEach(id =>{
          this.deck.push(prototypeQuestions.filter(x => x.id === id));
       })
       return this.deck;
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      console.log(`**Bonus Round!**, Redemption time!`);
    }
  }
module.exports = Round;