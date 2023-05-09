// Your round will be the object that organizes guesses and 
// records if they are correct or incorrect.

const createRound = (deck) => {
    var round = {
        deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],

    }
    return round;
}

module.exports = { 
    createRound,
};