const {evaluateGuess} = require('./card')
function round(deck){
    return {
        deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : [],
        startTimer : Date.now()
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
    const completeTime = Date.now()
    const totalTime = calculateTime(round.startTimer,completeTime)
    let result = calculatePercentCorrect(round)
    console.log( `** Round over! ** You answered ${result} of the questions correctly!`)
    console.log( `You completed this deck in ${totalTime}.`)
};
function calculateTime(start,complete){
    const totalTime = (complete - start)/1000
    const totalTimeMinutes = Math.trunc(totalTime/60)
    const totalTimeSeconds = Math.trunc(totalTime%60)
    return `${totalTimeMinutes} minutes and ${totalTimeSeconds} seconds`
};

module.exports = {
    round,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    calculateTime
};