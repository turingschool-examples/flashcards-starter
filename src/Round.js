const Turn  = require('../src/Turn.js');
const Game = require('../src/Game.js');
class Round {
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
        if(this.calculatePercentCorrect() < 90 ){
            var string = `** You need to Review! ** You only answered ${this.calculatePercentCorrect()}% of the questions correctly!`
            console.log(string)
            return string
           let game =  new Game(this.deck)
        console.log('deck',this.deck)
           game.start(this.deck)
        }
        else{
            console.log(`Nice Job you got ${this.calculatePercentCorrect()} you can move on!`)
        }
    }
    

}
module.exports = Round