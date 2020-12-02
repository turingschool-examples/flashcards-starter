const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    it.skip('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceOf(Turn);
    });

    it.skip('should store a guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object');
      expect(turn.guess).to.deep.equal('object');
    });

    it.skip('should store a card', function(){
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.card).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });

    it.skip('should return the user\'s guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.returnGuess()).to.deep.equal('object');
    });

    it.skip('should return the user\'s card', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    });

    it.skip('should evaluate the user\'s guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.evaluateGuess()).to.deep.equal(true);
    });

    it.skip('should give feedback on the user\'s guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      expect(turn.giveFeedback()).to.deep.equal('correct!');
    });
});{

  
}