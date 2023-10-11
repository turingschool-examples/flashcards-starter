

function createCard(id, question, answers = [], correctAnswer){
   let card = {
        id,
        question,
        answers,
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