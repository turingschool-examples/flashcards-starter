const Turn = require("./Turn");

class Round{
    constructor(deck){
        this.deck = deck
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currectGuesses = [];
        this.currentCard = deck.decks[this.turns];
    }
    returnCurrentCard(){
        //console.log(this.currentCard)
        //console.log(this.deck.decks[this.turns])
        return this.currentCard
    }
    takeTurn(guess){
        let turnsclass = new Turn(guess, this.currentCard);
        //console.log("turns", this.turns)
        this.turns += 1;
        
        let result = turnsclass.evaluateGuess();
        console.log(turnsclass.giveFeedback())
        
        if(result !== false){
            this.currectGuesses.push(turnsclass.card.id);
            console.log(turnsclass.card.id)
            turnsclass.giveFeedback();
            return turnsclass.evaluateGuess()
        } else {
            turnsclass.giveFeedback()
            this.incorrectGuesses.push(turnsclass.card.id)
            console.log(turnsclass.card.id)
            return turnsclass.evaluateGuess();
        }
    }
    calculatePercentCorrect(){
       //console.log(("percentage", this.currectGuesses.length/this.deck.decks.length) * 100)
        let result = (this.currectGuesses.length/this.deck.decks.length) * 100
        console.log(result)
        return Math.floor(result);
    }
    endRound(){
        let result = this.calculatePercentCorrect()
        return `** Round over! ** You answered ${Math.floor(result)}% of the questions correctly!`;
    }
}

module.exports = Round;