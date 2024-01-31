function createRound(deck) {
    var newRound = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return newRound;
};

function takeTurn(guess, round) {
    round.turns++
    if(guess === round.currentCard.correctAnswer) {
        round.currentCard = round.deck[round.turns];
        return 'Correct!';
    } else {
        round.incorrectGuesses.push(round.currentCard.id);
        round.currentCard = round.deck[round.turns];
        return 'Incorrect!';
    };
};

function calculatePercentCorrect(round) {
    const wins = round.turns - round.incorrectGuesses.length
    const percentageWon = Math.round((wins/round.turns) * 100)
    return percentageWon
}

function endRound(round) {
    const wins = round.turns - round.incorrectGuesses.length
    const percentageWon = Math.round((wins/round.turns) * 100)
    if(round.turns === round.deck.length) {
        console.log(`** Round over! ** You answered ${percentageWon}% of the questions correctly!`)
    }
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }