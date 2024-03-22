function createCard(id = 1, questionString, answersArray, answerString){
    return {
        id,
        question : questionString,
        answers : answersArray,
        correctAnswer : answerString,
    };
};

function evaluateGuess(guessString, answerString){
    if (guessString === answerString){
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}
module.exports = {
    createCard,
    evaluateGuess
}