const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    //creates cards
    // takes card class and puts each card into card deck
    //I need to iterate through the data array and for each piece of data put it into new array 
    // let newDeck = []
    // prototypeData.forEach(card => {
    //   const card = new Card(card.id, card.question, card.answer, card.correctAnswer)
    //   newDeck.push(card)
    // })

    let newDeck = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    
    newDeck = new Deck(newDeck)
    //puts cards in deck
    //creates a new round using deck
    // const round = new Round(newDeck);
    this.currentRound = new Round(newDeck)
    this.printMessage(newDeck);
    this.printQuestion(this.currentRound);
    
    //invokes printMessage to display message in the CLI
    //invokes printQuestion to kick off helper questions via CLI
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;