class Turn {
    constructor(guess, card) {
        this.guess = guess; 
        //This should be whatever string the player guesses
        this.card = card;
        //This should be the current card object in the game 
        //I will need to compare the guess with the card property to see if it's true or false
    }
    returnGuess() {
        //method that returns the guess - takes in this.guess as an argument
    }

    returnCard() {
        //returns the card object (probably takes in this.card as an argument)
    }
    evaluateGuess() {
        // check is this.guess === this.cards.correct answer and returns either true of false 
    }

    giveFeedback() [
        // depending on what evaluate guess returns this returns a string of correct or incorrect 
    ]
}