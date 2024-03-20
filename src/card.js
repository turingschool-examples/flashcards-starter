function createCard(id, question, answers, correctAnswer){
    card = {
        id: id, 
        question: question, 
        answers: answers, 
        correctAnswer: correctAnswer
    }
    return card
}

function evaluateGuess(guess, correctAnswer){
    if (guess === correctAnswer){
        return 'Correct!'
    } else {
        return 'Incorrect :('
    }
}

function createDeck(cards){
    deck = {
        cards: cards
    }
    return deck
}

function countCards(deck){
    return deck.length
}

function createRound(deck, currentCard, turns, incorrectGuesses) {
    round = {
       deck: deck,
       currentCard: currentCard,
       turns: turns || 0,
       incorrectGuesses: incorrectGuesses
    }
    return round
}

function takeTurn(guess, round){
    round.turns ++
    if (guess !== round.deck.correctAnswer){
        round.incorrectGuesses.push(round.deck.id)
        return 'Incorrect :('
    }
    else {
        return "Correct!"
    }
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
    return `**ROUND OVER** You answered ${percentageCorrect}% of the questions correctly!`
}


module.exports = {
    createCard, 
    evaluateGuess, 
    createDeck, 
    countCards, 
    createRound, 
    takeTurn, 
    calculatePercentCorrect, 
    endRound
}