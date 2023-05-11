const { evaluateGuess } = require("./card");

const createRound = (deck) => {
    var round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        startTime: new Date(),
    }
    return round;
}

const takeTurn = (guess, currentRound) => {
    var answer = evaluateGuess(guess, currentRound.currentCard)
    if (answer === 'incorrect!'){
        currentRound.incorrectGuesses.push(currentRound.currentCard.id)
    }
    currentRound.turns += 1;
    currentRound.currentCard = currentRound.deck[currentRound.turns]
    if (currentRound.turns >= currentRound.deck.length){
        currentRound.currentCard = false;
    }
    return answer
}

const calculatePercentCorrect = (round) => {
    var turnsTaken = round.turns
    var wrongGuesses = round.incorrectGuesses.length
    var percentageWrong = (wrongGuesses/turnsTaken) * 100;
    var percentageRight = Math.floor(100 - percentageWrong)
    return percentageRight;
}

const endRound = (round) => {
    const endTime = stopTimer(round)
    var correct = calculatePercentCorrect(round)
    console.log(`** Round over! ** You answered ${correct}% of the questions correctly!`)
    console.log(endTime);
    return `** Round over! ** You answered ${correct}% of the questions correctly!`
}

const stopTimer = (round) => {
    const endTime = new Date();
    const elapsedTime = endTime - round.startTime;
    const elapsedMinutes = Math.floor(elapsedTime / (1000 * 60));
    const elapsedSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const result = `Quiz completed in ${elapsedMinutes} minutes and ${elapsedSeconds} seconds.`
    return result;
}

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    stopTimer
};