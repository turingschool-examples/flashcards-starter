class Card {
  constructor(cardId, question, answers, correctAnswer) {
    this.cardId = cardId;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    // this.cardId = cardId - 1;
    // this.question = prototypeData[cardId].question;
    // this.answers = prototypeData[cardId].answers;
    // this.correctAnswer = prototypeData[cardId].correctAnswer;
  }
}

module.exports = Card

// id will be passed as an argument so if 1 is passed, the cardId is 1
// question will be grabbed from prototypeData[cardId].question
// answers will be grabbed from prototypeData[cardId].answers
// correctAnswer will be grabbed from prototypeData[cardId].correctAnswer

// const card = new Card(1, 'Question text?',
//    ['answer 1', 'answer 2', 'answer 3'],
//    'correct answer')