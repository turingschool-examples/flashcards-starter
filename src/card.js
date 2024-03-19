function createCard(id = 1, questionString, answersArray, answerString){
    return {
        id,
        question : questionString,
        answers : answersArray,
        correctAnswer : answerString
    };
};
module.exports = {
    createCard,
}