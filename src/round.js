const {evaluateGuess} = require('./card')
function round(deck){
    return {
        deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : []
    };
};
function takeTurn(guess, round){
    const turnCard = round.currentCard;
    round.turns += 1;
    round.currentCard = round.deck[round.turns];
    const judgement = evaluateGuess(guess, turnCard.correctAnswer);
    if (judgement === 'incorrect!'){
        round.incorrectGuesses.push(guess)
    };

    return judgement
};
function calculatePercentCorrect(round){     
        let ratio = ((round.turns-round.incorrectGuesses.length) / round.turns)*100;
        ratio = `${Math.trunc(ratio)}%`
        return ratio
};
function endRound(round){
    let result = calculatePercentCorrect(round)
    console.log( `** Round over! ** You answered ${result} of the questions correctly!`)
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound
};