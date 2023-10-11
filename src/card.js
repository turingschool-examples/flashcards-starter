

function createCard(id, question, answers = [], correctAnswer){
   let card = {
        id,
        question,
        answers,
        correctAnswer
    }
    return card
}

function evaluateGuess(guess, card){
        if(guess === card.correctAnswer){
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
}

module.exports = {
    createCard,
    evaluateGuess
  };