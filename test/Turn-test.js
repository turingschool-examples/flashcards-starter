const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {

        const turn = new Turn();

        expect(Turn).to.be.a('function');
    });

    it('should be an instance of a Turn', function() {

        const turn = new Turn();

        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should be able to store a guess', function() {

        const turn = new Turn('Tis a bleep blorp');

        expect(turn.guess).to.equal('Tis a bleep blorp');
    });

    it('should be able to store a card object', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('Tis a bleep blorp', card);

        expect(turn.currentCard).to.deep.equal(card);
    });
    it('should return the guess', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('Tis a bleep blorp', card);

        expect(turn.returnGuess()).to.equal('Tis a bleep blorp');
    });

    it('should return the card', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('Tis a bleep blorp', card);

        expect(turn.returnCard()).to.equal(card);
    });

    it('should see if the guess is wrong', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('Tis a bleep blorp', card);

        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should see if a guess is correct', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('object', card);

        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should say if a guess is incorrect', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('Tis a bleep blorp', card);

        expect(turn.giveFeedBack()).to.equal('Keep trying! You are close!');
    });
    it('should say if a guess is correct', function() {

        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

        const turn = new Turn('object', card);

        expect(turn.giveFeedBack()).to.equal('Way to go! You got it right!');
    });
})