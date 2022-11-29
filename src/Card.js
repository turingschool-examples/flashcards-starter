class Card {
    constructor(id, question, answers, correctAnswer) {
        this.id = id || 6;
        this.question = question || "What is an example of a mutator method?";
        this.answers = answers || ["sort()", "map()", "join()"];
        this.correctAnswer = correctAnswer || "sort()";
    }
}

module.exports = Card;