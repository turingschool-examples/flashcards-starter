

function createCard(id, question, answer = [], correctAnswer){
    card = {
        id,
        question,
        answer,
        correctAnswer
    }
    return card
}

function playerAnswer(){

}

module.exports = {
    createCard,
    playerAnswer
  };