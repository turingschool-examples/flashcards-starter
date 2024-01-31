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
    // console.log('guess:', guess);
    // console.log('current card: ',round.currentCard);
    if (evaluation === 'Incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    };
    if (evaluation !== 'Please choose a valid option!') {
        round.turns++;
        // round.deck.shift()
        round.deck.push(round.deck.shift());
        round.currentCard = round.deck[0];
    };

    console.log('deck array [0]: ', round.deck[0] )
    console.log('round deck after shift:', round.deck)
    console.log('current card: ', round.currentCard) /*why is the current card not updating?*/ 
    console.log('round object: ', round)
    
    return evaluation
};



module.exports = {
    evaluateGuess,
    createRound,
    takeTurn,
    // calculatePercentCorrect,
    // endRound
};