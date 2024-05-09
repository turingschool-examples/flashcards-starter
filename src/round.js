const { createCard } = require('./card');
const { createDeck } = require('./deck')

function createRound(deck, currentCard = deck.length > 0 ? deck[0] : null, turns = 0, incorrectGuesses = []) {
    var newRound = {
        deck: deck,
        currentCard: currentCard,
        turns: turns || 0,
        incorrectGuesses: incorrectGuesses
    }
    return newRound;
}

const deck = createDeck();


function takeTurn(guess, round){
    round.turns++;
    if(round.turns > round.deck.length){
        return 'Game over!'
    }
    const currentCard = round.deck[round.turns - 1];
    const isCorrect = guess === currentCard.correctAnswer;
    round.currentCard = round.deck[round.turns]
    if (isCorrect === false){
        round.incorrectGuesses.push(currentCard.id)
        return `Incorrect!`
    } else {
        return `Correct!`
    }
}

function calculatePercentCorrect(round){
    const correctGuesses = round.turns - round.incorrectGuesses.length;
    const totalGuesses = round.turns;
    const percentCorrect = (correctGuesses / totalGuesses) * 100;
    return percentCorrect;
}

function endRound(round){
    const percentCorrect = calculatePercentCorrect(round);
    const result = `** Round Over! ** You answered ${percentCorrect}% of the questions correctly!`
    console.log(result);
    return result;
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound, 
}