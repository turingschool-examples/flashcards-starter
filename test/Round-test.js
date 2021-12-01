const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe("Round", function () {

    it("should be a function", function () {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it("should be an instance of Round", function () {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    });

    it("should be able to see the current deck", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.deep.equal([card1, card2, card3]);
    });

    it("should be able to show the current card being played", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        });
    });

    it("should start out with no turns", function () {
        const round = new Round();
        expect(round.turns).to.equal(0);
    });

    it("should start out with no incorrect guesses", function () {
        const round = new Round();
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it("should be able to add to the turns count after a turn is taken", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn("array");
        round.takeTurn("object");

        expect(round.turns).to.equal(2);
    });

    it("should move to the next card in the deck once a turn is taken", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn("object");

        expect(round.returnCurrentCard()).to.deep.equal({
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        });
    });

    it("should have a method to calculate the percentage of correct guesses", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn("function");
        round.takeTurn("array");

        expect(round.turns).to.equal(2);
        expect(round.incorrectGuesses).to.deep.equal([1]);
        expect(round.returnCurrentCard()).to.deep.equal({
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        expect(round.calculatePercentCorrect()).to.equal(50);
    });

    it("should end the round and tell you the percentage of correct answers", function () {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        
        round.takeTurn("function");
        round.takeTurn("array");

        expect(round.turns).to.equal(2);
        expect(round.incorrectGuesses).to.deep.equal([1]);
        expect(round.returnCurrentCard()).to.deep.equal({
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        expect(round.calculatePercentCorrect()).to.equal(50);
        expect(round.endRound()).to.deep.equal("** Round over! ** You answered 50% of the questions correctly!");
    })
});
