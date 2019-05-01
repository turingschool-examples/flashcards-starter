class Round {
  constructor(currentCard, deck, playerGuess) {
    this.currentCard = currentCard;
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.playerGuess = playerGuess;
  }

  //reorderDeck() {
    //The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
  //}

  returnCurrentCard() {
    //method that returns the current card being played
  }

  takeTurn() {
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    //The turns count is updated, regardless of whether the guess is correct or incorrect
    //The next card becomes current card
    //Guess is evaluated / recorded. Incorrect guesses will be stored(via the id) in an array of incorrectGuesses - turn.evaluateGuess();
    //Feedback is returned regarding whether the guess is incorrect or correct - turn.giveFeedback();
  }

  calculatePercentCorrect() {
    //method that calculates and returns the percentage of correct guesses
  }

  endRound() {
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
}

};

module.exports = Round;