class Turn{
    constructor(myGuess, card){
        this.myGuess = myGuess;
        this.card = card;
        // this.cardQuestion = card.cardQuestion;
        // this.cardOptions = card.cardOptions;
        // this.cardAnswer = card.cardAnswer;
        // console.log('My Answer', this.myGuess)
        // console.log('New Answer', this.myFeed)
    
    }
returnGuess(){
 return this.myGuess;
 
}
returnCard(){
    return this.card;
}
evaluateGuess(){
    console.log(this.myGuess, this.card.correctAnswer)
    if(this.myGuess === this.card.correctAnswer){
    return "True";
    } else{
        return "False";
    }
}
giveFeedback(){
    if(this.myGuess === this.card.correctAnswer){
        return "Correct";
    } else {
        return "Incorrect";
    }
}
}

module.exports = Turn;