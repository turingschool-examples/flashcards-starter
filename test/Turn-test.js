const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it('should allow the user to make a guess', function() {
        const turn = new Turn('array');
        expect(turn.guess).to.equal('array')
    });

    it('should reference the current card at play', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('object', card);
        expect(turn.currentCard).to.equal(card)

    });

    it('should return the guess made by the user', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('array', card);

        turn.returnGuess();
        expect(turn.returnGuess()).to.equal('array')
    });

    it('should return the guess made by the user', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('array', card);

        turn.returnCard();
        expect(turn.returnCard()).to.eql(card);
    });

    it('should evaluate if guess is correct or not', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('array', card);

        turn.evaluateGuess(card);
        expect(turn.evaluateGuess(card)).to.equal(false);
    });

    it('should evaluate if guess is correct or not again', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('object', card);

        turn.evaluateGuess(card);
        expect(turn.evaluateGuess(card)).to.equal(true);
    });

    it('should evaluate if guess is correct or not again', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('object', card);

        turn.evaluateGuess(card);
        expect(turn.evaluateGuess(card)).to.equal(true);
    });

    it('should tell user if guess is correct or incorrect', function() {
        const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const turn = new Turn('object', card);

        turn.giveFeedback(card);
        expect(turn.giveFeedback(card)).to.equal('correct!');
    });
    
});

