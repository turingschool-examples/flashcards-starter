const createCard = (id,question,answers,correctAnswer) => {
    let card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return card
}

const evaluateGuess = (guess,correctAnswer) => {

    if (correctAnswer === guess) {
     return 'correct!'
    } else {
     return 'incorrect!'
    }
}
//returning incorrect, needs to return correct

const createDeck = (cards) => {

     let deck = cards
    return deck
}

const countDeck = (deck) => {

    return deck.length
}

const createRound = (deck) => {
    var round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round
}

const takeTurn = (guess, round) => {
    
    let response = evaluateGuess(guess,round.currentCard.correctAnswer)
    if (response === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
    }

    round.turns += 1
    round.currentCard = round.deck[round.turns]

    //
  

    ////turns and current card start at 0 and are always on the same number so round.turn can represent the index of the card we're on
   return response
}

const calculatePercentCorrect = (round) => {

 let incorrect = round.incorrectGuesses / round.turns 
 let percentIncorrect = incorrect * 100
 let totalCorrect = 100 - percentIncorrect

    return Math.round(totalCorrect)
}

const endRound = (round) => {
 let percentCorrect = calculatePercentCorrect(round)

 return `**Round over!** You answered ${percentCorrect}% of the questions correctly!`
}

module.exports = {
createCard,
evaluateGuess,
createDeck,
countDeck,
createRound,
takeTurn,
calculatePercentCorrect,
endRound
}