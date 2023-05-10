const { evaluateGuess } = require('../src/turns');

const createRound = (deck) => {
    let round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round 
};

const takeTurn = (guess, round) => {
    result = evaluateGuess(guess, round.currentCard.correctAnswer)
    if(result === 'incorrect!'){
        round.incorrectGuesses.push(round.currentCard.id)
    } 
    round.turns++
    round.currentCard = round.deck[round.turns]
    return `You guessed ${result}`
};

const calculatePercentCorrect = (round) => {

    const percentCorrect = Math.round(100*(1-(round.incorrectGuesses.length/round.turns)))

    return `${percentCorrect}%`
};

const endRound = (round) => {
    const percentCorrect = calculatePercentCorrect(round);
    return `**ROUND OVER** You answered ${percentCorrect} of the questions correctly!`
};

module.exports ={
    createRound, 
    takeTurn,
    calculatePercentCorrect,
    endRound
}