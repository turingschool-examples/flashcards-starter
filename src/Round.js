const Turn = require("./Turn");

class Round {
    constructor(deck = []) {
        // this.deck = deck.map(card => card);
        this.deck = [...deck];
        this.turns = 0;
        this.incorrectGuesses = [];
        //I need turn passed in to keep track of responses and if it's correct 
        //I need access to the deck array and maybe cards array to keep track of current card
    }

    returnCurrentCard() {
        return this.deck[0]
        //returns the current card being played ie first card in the deck 
    }

    takeTurn(guess) {
        this.turns++
        const currentTurn = new Turn(guess, this.deck[0]);
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(currentTurn.card.id)
        }
        if (this.deck.length > 0) {
            this.deck.shift();
        } else {
            this.endRound()
        }



        //creates a new instance of the turn class
        //makes the next card in the aray the next turn if array length is > X
        //at the end of the deck initiate endRound
        //records the guess (seperate method)
        //pushes incorrect guesses to an array of incorrect guesses stored via the id
        //using turn method wther or not guess is correct - return feedback 
    }

    calculatePercentCorrect() {
        //calcuates and returns % correct - need a default value
    }

    endRound() {
        // prints '** Round over!** You answered <>% of the questions correctly
    }
}

module.exports = Round;