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

    endRound(){
        console.log(`** Round over! **`);
        console.log(`You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }

    calculatePercentCorrect(){
        return (((this.turns - this.incorrectGuesses.length)/ this.turns) * 100).toFixed(0)
    }

}

module.exports = Round;