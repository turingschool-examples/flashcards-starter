const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');



class Game {
    constructor() {
        this.currentRound = {};
    }

    printMessage(deck, round) {
        console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    }

    printQuestion(round) {
        util.main(round);
    }

    start() {
        let multipleCards = [];
        prototypeQuestions.forEach(card => {
            let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
            multipleCards.push(newCard);
            return multipleCards;
        })
        let newDeck = new Deck(multipleCards);
        let newRound = new Round(newDeck);
        this.currentRound = newRound;
        this.printMessage(newDeck, this.currentRound);
        this.printQuestion(this.currentRound)

    }


}

module.exports = Game;