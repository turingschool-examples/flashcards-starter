class Card {
  constructor(id, question, answers, correctAnswers) {
    this.id = id;
    this.question = question || 'What allows you to define a set of related information using key-value pairs?';
    this.answers = answers;
    this.correctAnswers = correctAnswers || 'object';
  }
}

module.exports = Card;
