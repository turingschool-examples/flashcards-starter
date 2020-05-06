/*
const card = new Card(1, 'What is Robbie\'s favorite animal',
 ['sea otter', 'pug', 'capybara'], 'sea otter');
*/
class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
module.exports = Card;