
// this.deck = deck 
// we will probably need a turn counter (updated whether guess is correct or incorrect)
// incorrect cards []

// Round class will be the object that takes in responses and records guesses (as well as if they are correct or incorrect). 

// returnCurrentCard()
// return the current card being played in deck 
// this.deck.cards[0]

// takeTurn()
// when a guess is made, a new Turn instance is created (so we'll have access to the properties in the Turn class here)
// add to turn counter
// shuffle to next card in array (remove first item so that first card is now the next card in the deck)
// evaluate the guess using turn.evaluateGuess() from Turn class
// guess is recorded? we'll need to shovel the cards that are incorrect into an empty array
// return feedback for both correct and incorrect guesses

//calculatePercentCorrect() 
// calculates and returns the percentage of correct guesses
// var correctCards = this.turns - this.incorrectCards.length
// var correctCardsPercentage = correctCards / this.turns * 100

//endRound() 
// return `Round over! You answered ${correctCardsPercentage}% of the questions correctly!`
