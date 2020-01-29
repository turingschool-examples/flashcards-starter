const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Round = require('./Round');
const Card = require('./Card');


class Game {
  constructor() {
    this.currentRound = 0;
  }
  start(){
    let deck = new Deck(this.newDeck(prototypeQuestions));
    let round = new Round(deck);
    this.printMessage(deck,round);
    this.printQuestion(round);
  }
  newDeck(data){
    let newDeck =[];
    data.forEach(function(element,index){
      newDeck.push(new Card(element.id,element.question,element.answers,element.correctAnswer))
    });
    return newDeck;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
