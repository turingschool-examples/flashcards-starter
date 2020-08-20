const Turn = require('../src/Turn');
const game = require('../src/Game');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.round;
    this.result;
    this.guess;
    this.currentCard;
    }
    returnCurrentCard = () => {
      return this.deck[0];
    }
    takeTurn = (guess) => {   
      this.guess = guess;
      this.currentCard = this.returnCurrentCard();
      return this.getResult();
    }
    getResult = () =>{
      this.round = new Turn(this.guess, this.currentCard);
      return this.evaluateGuess()
    }
    evaluateGuess = () =>{
      this.result = this.round.evaluateGuess();
      return this.handleResult();
    }
    handleResult = () =>{
      this.adjustGameSettings(this.result, this.currentCard);
      return this.round.giveFeedback();
    }
    adjustGameSettings = () =>{
      !this.result ? this.incorrectGuesses.unshift(this.currentCard.id) : null;
      this.deck.shift();
      this.turns++;
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns* 100 ) ;
    }
    bonusRound = () =>{
      console.log(`**Bonus Round!!!**, redemption time!`)
      let newestRound = new Round(this.createBonusDeck())
      util.main(newestRound)
    }
    createBonusDeck = () => {
      let bonusRoundDeck = []
      this.populateDeck(bonusRoundDeck);
      return bonusRoundDeck = new Deck([].concat(...bonusRoundDeck))
    }
    populateDeck = (bonusRoundDeck) => {
        this.incorrectGuesses.forEach(id =>{
        bonusRoundDeck.push(prototypeQuestions.filter(x => x.id === id))
       })
       return bonusRoundDeck;
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
module.exports = Round;