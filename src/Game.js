const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
    constructor() {
		this.currentRound;
		
	}

    printMessage(deck, round) {
        console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
    }

    printQuestion(round) {
        util.main(round);
    }

    start(){
		var cards = [];
		prototypeQuestions.forEach(x => cards.push(new Card(x.id, x.question, x.answers, x.correctAnswer)))
		var deck = new Deck(cards);
		this.currentRound = new Round(deck);
		this.printMessage(deck, this.currentRound);
		this.printQuestion(this.currentRound);
	}
}

module.exports = Game;