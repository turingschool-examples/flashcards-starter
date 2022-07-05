const { createPromptModule } = require("inquirer");

class Card {
    constructor(id, question) {
        this.id = id
        this.question = question

    }
}

module.exports = Card