function createRound(deck) {
    return {
      deck,
      currentCardIndex: 0,
      turns: 0,
      incorrectGuesses: [],
      takeTurn(guess) {
        // Increment turns count
        this.turns++;
        // Get the current card
        const currentCard = this.deck.cards[this.currentCardIndex];
        // Check if the guess is correct
        if (guess === currentCard.correctAnswer) {
          // Move to the next card
          this.currentCardIndex++;
          return 'correct!';
        } else {
          // Store the incorrect guess (card id) in the array
          this.incorrectGuesses.push(currentCard.id);
  
          // Move to the next card
          this.currentCardIndex++;
          return 'incorrect!';
        }
      },
    }};
 
function calculatePercentCorrect(round) {
    const correctGuesses = round.turns - round.incorrectGuesses.length;
    const percentCorrect = (correctGuesses / round.turns) * 100 || 0;
    return percentCorrect.toFixed(2);
    }
    
function endRound(round) {
    const percentCorrect = calculatePercentCorrect(round);
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
}

module.exports = {
    createRound,
    calculatePercentCorrect,
    endRound
}
