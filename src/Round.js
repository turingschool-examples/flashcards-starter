class Round {
    constructor(deck, turn){
        this.deck = deck
        this.turn = turn
        this.turns = 0,
        this.incorrectGuesses = [];
        
   
        
    }
returnCurrentCard(){
   
    return this.deck.newQuestions[this.turns]
  
    
    
}
takeTurn(){
    
 
   
    // var firstTurn = this.deck.newQuestions[0]
    
    if(this.returnCurrentCard().correctAnswer === this.turn.myGuess){
        
        this.turns = this.turns += 1
    return "Correct"
    } else {
        this.incorrectGuesses.push(this.returnCurrentCard().id)
        console.log(this.incorrectGuesses)
        this.turns = this.turns += 1
        return "Incorrect"
    }
     
}
calculatePercentCorrect(){
    console.log('result', this.turns, this.incorrectGuesses.length)
    return 1 - (this.incorrectGuesses.length/this.turns)
}

}

module.exports = Round;