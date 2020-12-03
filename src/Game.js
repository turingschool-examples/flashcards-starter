const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');


class Game {
    constructor() {
        this.currentRound = {};
        this.currentDeck = {};
    }

    printMessage(deck) {
        console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    }

    printQuestion(round) {
        util.main(round);
    }

    start() {
        const newCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
        const newDeck = new Deck(newCards);
        this.currentRound = new Round(newDeck.deck);
        this.currentDeck = newDeck;
        this.printMessage(this.currentDeck, this.currentRound);
        this.printQuestion(this.currentRound);
    }
}

module.exports = Game;