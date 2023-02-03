const Deck = require("./Deck")
const Turn = require('./Turn')

class Round{
    constructor(deck){
        this.deck = deck.cards
        this.turns = 0
        this.currentCard = this.deck[0]
        this.incorrectGuesses = []
    }

    returnCurrentCard(){
       this.currentCard = this.deck[0] 
       return this.currentCard
    }

    takeTurn(guess){
        let turn = new Turn (guess, this.currentCard)
        this.turns += 1
        turn.evaluateGuess()
        if(!turn.evaluateGuess()){
            this.incorrectGuesses.push(this.deck[0].id)
            turn.giveFeedback()
        } 
        const feedback = turn.giveFeedback()
            this.deck.shift()
            return feedback
    }

    calculatePercentCorrect(){
      const correctGuessNum =  this.turns - this.incorrectGuesses.length
      this.percentCorrect = Math.round(correctGuessNum/this.turns * 100)
      return this.percentCorrect
    }

    endRound(){
        var message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        console.log (message)
        return message

    }
}

module.exports = Round