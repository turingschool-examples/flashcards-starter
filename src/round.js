function createRound(deck) {
    return {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        startTime: Date.now()
    };
}

function takeTurn(guess, round) {
    round.turns++;
    let feedback = 'correct!';
    if (guess !== round.currentCard.correctAnswer) {
        round.incorrectGuesses.push({
            guess,
            questionID: round.currentCard.id
        });
        feedback = 'incorrect!';
    }
    
    let nextCardIndex = round.deck.indexOf(round.currentCard) + 1;
    round.currentCard = round.deck[nextCardIndex];
    return feedback;
}

function calculatePercentCorrect(round) {
    return round.incorrectGuesses.length / round.turns * 100;
}

function endRound(round) {
    if (round.turns === round.deck.length) {
        return `** Round over! ** You answered ${round.deck.length - round.incorrectGuesses.length} of the questions correctly!`;
    }
}

function getTimeElapsed(round) {
    let timeElapsedInSeconds = Math.floor((Date.now() - round.startTime) / 1000);
    return `Your round took ${timeElapsedInSeconds} seconds to complete`;
}

module.exports = {
    createRound,
    takeTurn,
    endRound,
    calculatePercentCorrect,
    getTimeElapsed
}
