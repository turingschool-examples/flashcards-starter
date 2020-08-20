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
      return this.deck[0]
    }
    takeTurn = (guess) => {   
      let currentCard = this.returnCurrentCard();
      let turn = new Turn(guess, currentCard);
      let result = turn.evaluateGuess();
      !result ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      this.turns++;
      return turn.giveFeedback()
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100 ) ;
    }
    bonusRound = () =>{
      this.incorrectGuesses.forEach(id =>{
        this.deck.push(prototypeQuestions.filter(x => x.id === id));
     })
      this.deck = new Deck([].concat(...this.deck));
      let bonusRoundDeck = new Round(this.deck);
      util.main(bonusRoundDeck);
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      console.log(`**Bonus Round!**, Redemption time!`);
    }
  }
module.exports = Round;