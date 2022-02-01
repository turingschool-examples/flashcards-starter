const data = require('data.js')

class Card {
    constructor(id, question) {
        this.id = id;
        this.question = question;
        this.answers = ['object', 'array', 'function'];
        this.correctAnswer = 'object';
    }
}

module.exports = Card