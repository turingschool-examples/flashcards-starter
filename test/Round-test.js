const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

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
        const deck = new Deck({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        }, {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        }, {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        const round = new Round(deck);
        expect(round.deck).to.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        }, {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        }, {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
    });

    it("should be able to show the current card being played", function () {
        const deck = new Deck({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
        }, {
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
        }, {
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.equal({
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
        expect(round.incorrectGuesses).to.equal([]);
    });

    it("should be able to add to the turns count after a turn is taken", function () {
        const round = new Round();
        expect(round.takeTurn()).to.be.a('function');

        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(2);
    });

});