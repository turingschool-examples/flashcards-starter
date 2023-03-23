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
    game.currentRound.startRound(game.deck,0); 
    console.log("Round line 14:"+game.currentRound.currentCard)
    console.log("game line 21:"+game.deck);
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
      console.log(`Welcome to FlashCards! You are playing with ${deck.deck.length} cards.
      -----------------------------------------------------------------------`)
    } else {
      console.log('Deck is not defined');
    }
  }
  
  printQuestion(round) {
      util.main(game.currentRound);
  }
}
const game = new Game();
game.start(game.deck);
//console.log(game.currentRound);





module.exports = Game;