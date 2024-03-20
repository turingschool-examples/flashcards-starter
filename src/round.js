class round{
    constructor(deck = [null]){
        this.deck = deck
        this.currentCard = this.deck[0]
        this.turns = 0
        this.incorrectGuesses = [null]
    };
};
function takeTurn(guess, round){
};
function calculatePercentCorrect(round){
};
function endRound(round){
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};