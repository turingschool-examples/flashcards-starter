const { evaluateGuess } = require("./card");

function createDeck(card1, card2, card3) {
    let cards = [];
    cards.push(card1, card2, card3);
    return cards
}

function countCards(deck) {
 let count = deck.length;
 return count
}

function createRound(deck) {
    let round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round
}

function takeTurn(guess, round) {
    round.turns ++;
    
    
    let evalCard = evaluateGuess(guess, round.currentCard.correctAnswer);
    if (evalCard === 'That is incorrect') {
        round.incorrectGuesses.push(round.currentCard.id)
        console.log('round', round)
    }
    console.log('evalCard', evalCard)
    
    round.currentCard = round['currentCard']
    // console.log('curcard', round.currentCard)
    console.log('deck', round.deck['currentCard']);
    return evalCard
}

module.exports = {
    createDeck,
    countCards,
    createRound,
    takeTurn
}