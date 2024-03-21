const {createCard, evaluateGuess} = require('./card')

function createDeck(cards){
    deck = cards
    return deck
}

function countCards(deck){
    return deck.length
}

function createRound(deck) {
    round = {
       deck: deck,
       currentCard: deck[0],
       turns: 0,
       incorrectGuesses: []
    }
    return round
}

function takeTurn(guess, round){
    var response = evaluateGuess(guess, round.currentCard.correctAnswer)
    round.turns ++
    round.currentCard = round.deck[round.turns]
    if (response === 'Incorrect :('){
        round.incorrectGuesses.push(round.deck.id)
    }
    return response
}

function calculatePercentCorrect(round) {
    if (round.turns === 0) {
        return 0;
    }
    let percentage = ((round.turns - round.incorrectGuesses.length) / round.turns) * 100;
    return percentage;
}

function endRound(round) {
    const percentageCorrect = calculatePercentCorrect(round);
    console.log(`**ROUND OVER** You answered ${percentageCorrect}% of the questions correctly!`)
    return `**ROUND OVER** You answered ${percentageCorrect}% of the questions correctly!`
}


module.exports = {
    createDeck, 
    countCards, 
    createRound, 
    takeTurn, 
    calculatePercentCorrect, 
    endRound
}