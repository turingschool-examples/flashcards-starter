function createRound(deck) {
    return {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: 0
    };
}

function takeTurn(guess, round) {
    round.turns++;
    if (guess !== round.currentCard.correctAnswer) {
        round.incorrectGuesses++;
    }
    
    let nextCardIndex = round.deck.indexOf(round.currentCard) + 1;
    round.currentCard = round.deck[nextCardIndex];
    return round;
}

function endRound() {
    
}

function calculatePercentCorrect() {
    
}

module.exports = {
    createRound,
    takeTurn,
    endRound,
    calculatePercentCorrect
}
