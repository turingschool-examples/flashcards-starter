function createCard (id,question,answers,correctAnswer) {
var card = {
    id:id,
    question:question,
    answers:answers,
    correctAnswer:correctAnswer,
}
return card
}

function evaluateGuess(guess,card){
    if (guess === card.correctAnswer) {
    return 'correct'
} else {
    return 'incorrect'
}
}

function createDeck(...cards){
var deck = []
deck.push(...cards)
return deck
}

function createRound(deck){
var round = {
    deck:deck,
    turns:0,
    currentCard:deck[0],
    incorrectGuesses:[]

}
return round
}

function takeTurns(){
    
}


module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    createRound,
    takeTurns
}