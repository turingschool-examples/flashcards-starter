function createCard(id, question, answers, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}

function evaluateGuess(guess, correctAnswer, round) {
    if (guess === correctAnswer) {
        return 'correct!'
    } else {
        incorrectGuessID(round)
        return 'incorrect!'
    }
}

function countCards(cards) {
    return cards
}

function createRound(deck) {
    var currentDeck = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return currentDeck
}

function takeTurn(round, guess) {
    var result = evaluateGuess(guess, round.currentCard.correctAnswer, round);
    increaseTurn(round);
    return result;
}

function increaseTurn(round) {
    round.turns++;
    if (round.turns < round.deck.length) {
        round.currentCard = round.deck[round.turns];
    }
}

function incorrectGuessID(round) {
    if (round) {
    round.incorrectGuesses.push(round.currentCard.id);
    }
}



module.exports = {
    createCard,
    evaluateGuess,
    countCards,
    createRound,
    takeTurn
}