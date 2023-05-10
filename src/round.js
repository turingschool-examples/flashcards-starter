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

function calculatePercentCorrect(round) {
    return round.incorrectGuesses / round.turns * 100;
}

function endRound(round) {
    if (round.turns === round.deck.length) {
        return `** Round over! ** You answered ${round.deck.length - round.incorrectGuesses} of the questions correctly!`
    }
}

module.exports = {
    createRound,
    takeTurn,
    endRound,
    calculatePercentCorrect
}
