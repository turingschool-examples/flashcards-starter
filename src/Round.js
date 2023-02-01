// const Turn = require("./Turn")
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
            console.log(turn.giveFeedback())
        } 
        const feedback = turn.giveFeedback()
            this.deck.shift()
            console.log(feedback)
            return feedback
    }

    calculatePercentCorrect(){
        
    }
      

        // turn.giveFeedback(){
        //     if (this.evaluateGuess()) {
        //         return 'correct!'
        //     } else {
        //         return 'incorrect!';
        //     }
  
    }

    // calculatePercentCorrect(){

    // }

    // endRound(){

    // }

module.exports = Round