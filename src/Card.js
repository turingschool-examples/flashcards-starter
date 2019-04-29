class Card {
  constructor(id, question, possibleAnswers, correctAnswer) {
    this.id = id || Date.now();
    this.question = question || null;
    this.possibleAnswers = possibleAnswers || [];
    this.correctAnswer = correctAnswer || null;
  }
}