function evaluateGuess(guess, cardObject) {
    let valid = cardObject.answers.includes(guess);
    let correct = guess === cardObject.correctAnswer ? true : false;
    if (!valid) {
        return 'Please choose a valid option!'
    } else if (correct) {
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
};

function createRound(deckArray) {
    let newRound = {
        deck: deckArray,
        currentCard: deckArray[0],
        turns: 0,
        incorrectGuesses: []
    };
    return newRound
};

function takeTurn(guess, round) {
    let evaluation = evaluateGuess(guess, round.currentCard);
    // console.log('guess:', guess)
    if (evaluation === 'Incorrect!') {
        console.log(round.currentCard.id)
        console.log('type of current card id:', typeof (round.currentCard.id))
        round.incorrectGuesses.push(round.currentCard.id)
        console.log(round.incorrectGuesses[0])
        console.log(typeof (round.incorrectGuesses[0]))
    }
    return evaluation
};



module.exports = {
    evaluateGuess,
    createRound,
    takeTurn,
    // calculatePercentCorrect,
    // endRound
};