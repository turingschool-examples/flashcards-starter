const Turn  = require('../src/Turn.js');
const Game = require('../src/Game.js');
class Round{
    constructor(cardDeck){
        this.deck = cardDeck.cards
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard(){
        return this.deck[this.turns]
    }
    takeTurn(userGuess){
        var currentCard = this.returnCurrentCard()
        var turn = new Turn(userGuess,currentCard)

            this.turns++
            if(turn.evaluateGuess() !== true){
            this.incorrectGuesses.push(currentCard.id)
            }
           return turn.giveFeedback()
    }
    calculatePercentCorrect(){
         var amountIncorrect = this.incorrectGuesses.length;
         var turnsTaken = this.turns
        return  Math.floor(amountIncorrect/turnsTaken *100) 
      
    }
    endRound(){
        var endString = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        if(this.calculatePercentCorrect() < 90 ){
            console.log(`** You need to Review! ** You only answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
           var game =  new Game(this)
           game.start(this)
        }
       return `** You can move on ! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }

}
module.exports = Round