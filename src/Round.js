class Round{
	constructor(deck){
		this.deck = deck;
	}

	returnCurrentCard(){
		return this.deck.cardDeck[this.turn]
	}

	takeTurn(){
		
	}
}

//create a turn count in the constructor
//within the method, the first thing that should happen is that the turn count should incrememnt up by 1
//within the method, it should invoke turn.evaluateGuess
//within the method, it should invoke the turn.giveFeedback() method
//within the method, it should store the id of the incorrect guesses 



// takeTurn: method that updates turns count, evaluates guesses, gives feedback, 
// and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** 
// You answered <>% of the questions correctly!’