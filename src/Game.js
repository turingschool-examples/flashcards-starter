const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
    constructor() {
        this.currentRound = new Round(prototypeQuestions);
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