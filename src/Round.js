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
        if(!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(currentTurn.card.id)
        }
        this.deck.push(deck[0]);
        this.deck.shift()
        
         return currentTurn.giveFeedBack()
    }
};











module.exports = Round;