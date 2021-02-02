class Round {
    constructor() {
        //probably needs to take in the cards awway as an argument 
    }

    returnCurrentCard() {
        //returns the current card being played ie first card in the deck 
    }

    takeTurn() {
        //updates turnCount ++
        //creates a new instance of the turn class
        //makes the next card in the aray the next turn if array length is > X
        //at the end of the deck initiate endRound
        //records the guess (seperate method)
        //pushes incorrect guesses to an array of incorrect guesses stored via the id
        //using turn method wther or not guess is correct - return feedback 
    }

    calculatePercentCorrect() {
        //calcuates and returns % correct - need a default value
    }

    endRound() {
        // prints '** Round over!** You answered <>% of the questions correctly
    }
}