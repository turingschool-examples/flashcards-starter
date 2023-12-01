function createCard(id, question, answers, correctAnswer) {
    return {
        id : id,
        question : question,
        answers : answers,
        correctAnswer : correctAnswer,
    }
}

function evaluateGuess(guess, correctAnswer) {
if (guess == correctAnswer) {
    return "Correct!"
}
    return "Incorrect!"
}

function createDeck(deck) {
    return deck
}

function countCards(deck) {
    return deck.length
}

function createRound(deck) {
    return {
        deck : deck,
        currentCard : deck[0],
        turns : 0,
        incorrectGuesses : []
     }
}

function takeTurn(guess, round) {
    const feedback = evaluateGuess(guess, round.currentCard.correctAnswer)
    if (feedback == "Incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns++
    round.currentCard = round.deck[round.turns]
    return feedback
}

function calculatePercentCorrect(round) {
    const wrong = round.incorrectGuesses.length
    const total = countCards(round.deck)
    const correct = total - wrong
    let percentCorrect = correct / total
    percentCorrect = percentCorrect * 100
    percentCorrect = Math.round(percentCorrect)
    return percentCorrect
}
function endRound(round) {
    return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = {
    createDeck,
    countCards,
    createCard,
    evaluateGuess,
    createRound,
    calculatePercentCorrect,
    endRound,
    takeTurn,
  }