const Deck = require("./Deck");
class Round {
    constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    };
    returnCurrentCard() {
        return this.deck[0]
    }
    takeTurn(currentTurn) {
        this.turn += 1 
        this.deck.cards.push(currentTurn.card);
        
        if(currentTurn.evaluateGuess() !== true) {
            this.incorrectGuesses.push(currentTurn.card.id)
            this.deck.cards.shift()
        }
         return currentTurn.giveFeedBack()
    }
    
     
};











module.exports = Round;