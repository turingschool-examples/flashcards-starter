class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id
    this.question = question
    this.answers = answers
    this.correctAnswer = correctAnswer
  }
    guess(guess) {
      console.log('false')
      if (!guess === this.correctAnswer) {
        console.log('false')
        return false
      } else {
        console.log('true')
        return true
      }
    }
}



module.exports = Card;
