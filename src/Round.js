const Turn = require('../src/Turn');
// 'object'
// 'array'
// 'mutator method

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentGuess;
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }

    takeTurn(guess) {
        this.currentGuess = new Turn(guess, this.returnCurrentCard())
        
        this.turns++

        if(!this.currentGuess.evaluateGuess()) {
             this.incorrectGuesses.push(this.currentGuess.currentCard.id)            
        }
        return this.currentGuess.giveFeedback()
    }

    calculatePercentCorrect() {
        // 3 questions
        // 1 incorrect
        // 2 correct
        const correctAnswers = this.turns - this.incorrectGuesses.length
        
        console.log(correctAnswers)
        console.log(this.turns)
        //correctAnswers = 2
        return Math.round(correctAnswers / this.turns * 100)
    }

    endRound() {
      //  how do we know that the round has ended?
        // we can test that the round is over after three turns?
      return console.log `** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }


    //incorrect guesses STORES the id of the card that was guessed incorrectly!
   
}

module.exports = Round;