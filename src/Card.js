class Card {
    constructor(id, question, answers, correctAnswer){
        this.id = id
        this.question = question
        this.answers = answers
        this.correctAnswer = correctAnswer
       
    }
    
}

// A Card represents a single flashcard
// Each card has an id, a question, possible answers, and a correct answer

module.exports = Card;


