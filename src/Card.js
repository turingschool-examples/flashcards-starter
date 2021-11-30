class Card{
  constructor(inputNumber, inputQuestion, inputAnswers, inputCorrectAnswer){
    this.id = inputNumber;
    this.question = inputQuestion;
    this.answers = inputAnswers;
    this.correctAnswer = inputCorrectAnswer;
  }
}

module.exports = Card;
