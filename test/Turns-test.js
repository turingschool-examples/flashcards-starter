const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe("Turn", function() {
   
    it("should be a function", function() {
        const turn = new Turn();
        expect(turn).to.be.a('function');
    });

    it("should be an instance of a function", function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it("should store a guess", function() {
        const card = new Card("id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array");
        const turn = new Turn("array");
        expect(turn.returnGuess()).to.equal("array");
    });

    it("should be able to accept different cards", function() {
        const card1 = new Card("id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array");
        const card2 = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("array", card);
        const turn2 = new Turn("object", card);
        expect(turn.returnGuess()).to.equal("array");
        expect(turn2.returnGuess()).to.equal("object");
    });

    it("should have a method that logs a guess", function() {
        const card = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("object", card);
        expect(turn2.returnGuess()).to.equal("object");
    });

    it("should have a method that displays the current card", function() {
        const card = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("object", card);
        expect(turn.returnCard()).to.equal("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
    });

    it("should have a method to evaluate if the guess is true or false", function() {
        const card = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("array", card);
        const turn2 = new Turn("object", card)
        expect(turn.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(true);
    });

    it("should give feedback if answer is correct", function() {
        const card = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("object", card);
        expect(turn.giveFeedback()).to.equal("Correct!!!");
    });

    it("should give feedback if answer is incorrect", function() {
        const card = new Card("id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object");
        const turn = new Turn("array", card);
        expect(turn.giveFeedback()).to.equal("Incorrect!"); 
    });
});