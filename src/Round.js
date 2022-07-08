const Turn = require("./Turn");

class Round {
    constructor(deck) { 
        this.turns = 0;
        this.incorrectGuesses = [];
        this.deck = deck;
    }

    returnCurrentCard() {
        return this.deck.deck[0];
    }
    
    takeTurn(guess) {
        let turn = new Turn(guess, this.returnCurrentCard());
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(turn.currentCard.id);
        }
        this.deck.deck.shift();
        this.turns++;
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        let correctGuesses = this.turns - this.incorrectGuesses.length;
        return parseFloat(((correctGuesses / this.turns) * 100).toFixed(2));
    }
    
    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
}




module.exports = Round;