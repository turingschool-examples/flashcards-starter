function createCard(id = 1, questionString, answersArray, answerString){
    return {
        id,
        question : questionString,
        answers : answersArray,
        correctAnswer : answerString
    };
};

function takeTurn(guessString, answerString){
    if (guessString === answerString){
        return true
    } else {
        return false
    }
}
module.exports = {
    createCard,
    takeTurn
}