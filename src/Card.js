class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = isNaN(id) ? Math.floor(Math.random()*500) : Number(id.toFixed());
    this.question = this.verifyString(question, 2);
    this.invalidCard = false;
    this.correctAnswer = this.verifyString(correctAnswer, 2);

    if (Array.isArray(answers)) {
      this.answers = this.verifyString(answers, 1)
    } else {
      this.answers = [
        'Please re-submit your card answers',
        'separated by quotes and',
        'commas inside of square brackets [ ]'
      ]
      this.invalidCard = true;
      // this.answers = this.verifyString(answers.toString().split(' '), 1)
    }
  }
  verifyString(data, x) {
    switch (x) {
      case 1:
        let strings = [];
        let dataToString = data.forEach((answer,i) => {
          return typeof answer !== 'string' ? strings.push(answer.toString()) : strings.push(answer);
        });
        return strings

      case 2:
        return [data].toString();
    }
  }
}

module.exports = Card;
