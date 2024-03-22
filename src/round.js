const {evaluateGuess} = require('./card')
function round(deck){
    return {
        deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : []
    };
};
function takeTurn(guess, roundCopy){
    // const roundCopy = {...round}
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
    // const toReturn = [roundCopy, judgement]
    // return toReturn
    return judgement
};
function calculatePercentCorrect(roundCopy){
    // const roundCopy = {...round}
    if(roundCopy.turns===0 || roundCopy.deck == [null]){
        return 'Error: no guesses to calculate, perhaps the deck was not properly initialized?'
    }
    if(roundCopy.incorrectGuesses[0]===null){
        return '100%';
    } else  {       
        let ratio = ((roundCopy.turns-roundCopy.incorrectGuesses.length) / roundCopy.turns)*100;
        ratio = `${Math.trunc(ratio)}%`
        return ratio
    };
    
};
function endRound(round){
    // if(round.result !== undefined){
    let result = calculatePercentCorrect(round)
    console.log( `** Round over! ** You answered ${result} of the questions correctly!`)
    // };
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};