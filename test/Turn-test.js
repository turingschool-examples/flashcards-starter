const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should be about to make a guess to the question', function() {
        const turn = new Turn('');

        expect(turn.guess).to.equal('');
    });

    it('should have a current card in play', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('', card);

        expect(turn.cardInPlay).to.equal(card);
    });

    it('should return a guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('', card);

        turn.returnGuess();
    });

    it('should return the Card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('', card);

        turn.returnCard();
    });

    it('should let user know if they answered the question correctly', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object', card);

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should let the user know if the guess is correct or not', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn1 = new Turn('apple', card);
        const turn2 = new Turn('object', card);


        turn1.giveFeedback();
        turn2.giveFeedback();

        expect(turn1.giveFeedback()).to.equal('incorrect!');
        expect(turn2.giveFeedback()).to.equal('correct!');
    });
});