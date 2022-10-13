class Card {
  constructor(cardData) {
    this.id = cardData['id']
    this.question = cardData['question']
    this.answers = cardData['answers']
    this.correctAnswer = cardData['correctAnswer']
  }
}

module.exports = Card;