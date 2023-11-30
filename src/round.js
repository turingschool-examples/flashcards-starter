function createRound(deck) {
  return {
    deck,
    currentCard: 0,
    turns: 0,
    incorrectGuesses: [],
    takeTurn(guess) {
      this.turns++;
      const currentCard = this.deck.cards[this.currentCard];
      if (guess === currentCard.correctAnswer) {
        // Move to the next card
        this.currentCard++;
        return 'correct!';
      } else {
        // Store the incorrect guess (card id) in the array
        this.incorrectGuesses.push(currentCard.id);

        // Move to the next card
        this.currentCard++;
        return 'incorrect!';
      }
    },
  }
};
 
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
