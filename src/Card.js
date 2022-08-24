class Card {
  constructor(cardId, cardQuestion, cardAnswers, cardRightAnswer) {
    this.id = cardId || 1;
    this.question = cardQuestion ||
      "What allows you to define a set of related information using key-value pairs?";
    this.answers = cardAnswers || ["object", "array", "function"];
    this.correctAnswer = cardRightAnswer || "object";
  }
}

module.exports = Card;
