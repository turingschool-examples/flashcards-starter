const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCardindex = 0;
        this.turns = [];
        this.percentCorrect = [];
        this.correctGuesses = [];
        this.incorrectGuesses = [];
    }
    startRound() {
        this.currentCard = this.deck[this.currentCardIndex];
    };

    returnCurrentCard(){
        return this.currentCard

    }
    
    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns += 1
        turn.evaluateGuess()
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.deck[0].id);
        } else {
        this.correctGuesses.push(this.deck[0].id);
        }
        var feedback = turn.giveFeedback()
        this.deck.shift()
        return feedback
      };

    calculatePercentCorrect(){
        const correctGuessesNum = this.turns - this.incorrectGuesses.length
        this.percentCorrect = Math.round(correctGuessesNum/this.turns * 100)
        return this.percentCorrect
    }
    endRound() {
      const message = ` Round Finished! : You answered ${this.calculatePercentCorrect()} of the problems correctly.`
      return message
    }
};


module.exports = Round