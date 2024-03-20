const createRound = (deck,currentCard, turns, incorrectGuess) => {
    let round = {
        deck,
        currentCard,
        turns,
        incorrectGuess
    }
    console.log('round',round)
    return round
}








module.exports ={
    createRound
    //takeTurn,
    //calculatePercentCorrect,
    //endRound
}