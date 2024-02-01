const { evaluateGuess } = require('../src/card');

function createRound(deck) {
    const newRound = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        startTime: Date.now()
    }

    return newRound;
}

function takeTurn(guess, round) {
    message = evaluateGuess(guess, round.currentCard.correctAnswer);
    if (message === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id);
    }
    round.turns++;
    round.currentCard = round.deck[round.turns];

    return message;
}

function calculatePercentCorrect(round) {
    const percentIncorrect = Math.round((round.incorrectGuesses.length / round.turns) * 100);
    const percentCorrect = 100 - percentIncorrect;
    
    return percentCorrect;
}

function endRound(round) {
    const endTime = Date.now()
    let elapsedTime = Math.round((endTime - round.startTime) / 1000);
    let timeString = `${elapsedTime}`;

    if (elapsedTime > 59) {
        if (elapsedTime < 120) {
            timeString = `${Math.floor(elapsedTime / 60)} minute and ${elapsedTime % 60} seconds`
        }
        else {
            timeString = `${Math.floor(elapsedTime / 60)} minutes and ${elapsedTime % 60} seconds`
        }
    }

    console.log('')
    console.log('🌼🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼  Round Over! 🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼')
    console.log('')
    console.log(`    🧠 You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
    console.log(`    ⏱️  And the game took you ${timeString} seconds to play.`)
    console.log('')
    console.log('🌼🌷🌼🌷🌼🌷🌼🌷🌼  Thanks for Playing! 🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼🌷🌼')
    console.log('')
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}