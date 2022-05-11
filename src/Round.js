const Turn = require('../src/Turn');

class Round{
    constructor(deck){
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard(){
        return this.deck.cards[this.turns]
    }
    takeTurn(guess){
        const turn = new Turn(guess,this.deck.cards[this.turns]);
        // stores the incorrect id
        turn.evaluateGuess()? null:this.incorrectGuesses.push(turn.card.id);
        // increments turns
        this.turns++
        // returns correct or incorrect
        return turn.giveFeedback();
    }
    calculatePercentCorrect(){
        return ((this.turns-this.incorrectGuesses.length)/ this.turns) * 100
    }
    endRound(){
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}
module.exports = Round;