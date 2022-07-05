const { createPromptModule } = require("inquirer");

class Card {
    constructor(id, question, answer) {
        this.id = id
        this.question = question
        this.answers = answer
    }
}

module.exports = Card