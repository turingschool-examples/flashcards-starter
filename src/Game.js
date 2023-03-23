const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card');
const Turn = require('./Turn');


class Game {
  constructor(deck) {
    const cards = this.createCards(prototypeQuestions);
    this.currentRound = undefined;
    //this.deck = deck
    
    this.deck = new Deck(cards);
    
  }
  start(deck) {
    
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion();


  }
  createCards(questions) {
    let cards = [];
    for (let i = 0; i < questions.length; i++) {
    cards.push(new Card(questions[i]));
  }

  return cards;
  }
 
  countCards() {
    return this.deck.length;
  }

  printMessage(deck, round) {
    if (deck) {
      console.log(`Welcome to FlashCards! You are playing with ${this.countCards()} cards.
      -----------------------------------------------------------------------`)
    } else {
      console.log('Deck is not defined');
    }
  }
  
  printQuestion(round) {
      util.main(round);
  }
}
const game = new Game();
game.start(game.deck);
console.log(game.currentRound);





module.exports = Game;