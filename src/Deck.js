class Deck {
    constructor(newQuestions){
        this.newQuestions = newQuestions
        
    
    }
    countCards(){
     return this.newQuestions.length
    
    }
}

// Your Deck class should be initialized with an array of Card objects and should have an accompanying test file. It should know how many Cards are in the Deck.
module.exports = Deck;