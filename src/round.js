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
function takeTurn(round, guess = null){
    const roundCopy = {...round}
    const turnCard = roundCopy.currentCard;
    roundCopy.turns += 1;
    roundCopy.currentCard = roundCopy.deck[roundCopy.turns];
    const judgement = evaluateGuess(guess, turnCard.correctAnswer);
    if (judgement === 'incorrect!'){
        if (roundCopy.incorrectGuesses[0] === null){
            roundCopy.incorrectGuesses = []
        };
        roundCopy.incorrectGuesses.push(guess)
    };
    const toReturn = [roundCopy, judgement]
    return toReturn
};
function calculatePercentCorrect(round){
    const roundCopy = {...round}
    if(roundCopy.turns===0 || roundCopy.deck == [null]){
        return 'Error: no guesses to calculate, perhaps the deck was not properly initialized?'
    }
    if(roundCopy.incorrectGuesses[0]===null){
        return '%100';
    } else  {       
        let ratio = ((roundCopy.turns-roundCopy.incorrectGuesses.length) / roundCopy.turns)*100;
        ratio = `%${Math.trunc(ratio)}`
        return ratio
    };
    
};
function endRound(round){
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};