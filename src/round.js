const Turn = require("./turn");

class Round {
    constructor(deck){
        this.deck = deck.deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard(){
        return this.deck[0];
    }

    takeTurn(guess){
        this.turns = this.turns + 1;
        let currentCard =  this.returnCurrentCard();
        let currentTurn = new Turn(guess, currentCard);

        if(!currentTurn.evaluateGuess()){
            this.incorrectGuesses.push(currentCard.id)
        }
        
        this.deck.shift();
        return currentTurn.giveFeedback();
    }

    calculatePercentCorrect(){
        return ((this.incorrectGuesses.length / this.turns) * 100)
    }

}

module.exports = Round;