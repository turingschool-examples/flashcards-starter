class Card {
  constructor(cardId, cardQuestion, possibleAnswers, correctAnswer){
    this.id = cardId,
    this.question = cardQuestion,
    this.options = possibleAnswers,
    this.answer = correctAnswer
  }
}


module.exports = Card;