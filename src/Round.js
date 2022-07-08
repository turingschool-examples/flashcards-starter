
const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0;
        this.incorrectGuesses = []


    }
    returnCurrentCard() {
        return this.deck.cards[this.turns]
       
    }

    takeTurn(guess) {
        var currentCard = this.returnCurrentCard();
        var turn = new Turn(guess, currentCard)
        this.turns++
        if(turn.giveFeedback() === "INCORRECT") {
            this.incorrectGuesses.push(this.currentCard.id);
        }
    }

    calculatePercentCorrect() {
        var num = this.turns - this.incorrectGuesses.length;
        var percentCorrect = (num / this.turns) * 100;
        return percentCorrect;

    }

}




module.exports = Round;