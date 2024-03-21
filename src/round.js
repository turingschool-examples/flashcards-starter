const {createDeck, countCards} = require('./deck')
const {createCard, evaluateGuess} = require('./card')
function round(deck = [null]){
    return {
        deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : [null]
    };
};
function takeTurn(guess, round){
    const turnCard = createCard(round.currentCard);
    round.turns += 1;
    round.currentCard = round.deck[round.turns];
    const judgement = evaluateGuess(guess, turnCard.correctAnswer);
    console.log(judgement);
    if (judgement === 'incorrect!'){
        if (round.incorrectGuesses[0] === null){
            round.incorrectGuesses = []
        };
        round.incorrectGuesses.push(guess)
    };
    return round
};
function calculatePercentCorrect(round){
};
function endRound(round){
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};