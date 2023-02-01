class Card {
  constructor(cardId, cardQuestion, possibleAnswers, correctAnswer){
    this.id = cardId,
    this.question = cardQuestion,
    this.answers = possibleAnswers,
    this.correctAnswer = correctAnswer
  }
}


module.exports = Card;