const { countCards } = require("./deck");

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
    if (evaluation === 'Incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    };
    if (evaluation !== 'Please choose a valid option!') {
        round.turns++
        round.deck.push(round.deck.shift())
        round.currentCard = round.deck[0]
    };
    return evaluation
};

function calculatePercentCorrect(round) {
    let totalCards = countCards(round.deck);
    let rawScore = (totalCards - round.incorrectGuesses.length) / totalCards;
    let percentage = Math.round(rawScore * 100);
    return percentage    
};

function endRound(round) {
    let percentage = calculatePercentCorrect(round);
    let message = `**Round over!** You answered ${percentage}% of the questions correctly!`;
    console.log(message);
    return message
};


module.exports = {
    evaluateGuess,
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
};