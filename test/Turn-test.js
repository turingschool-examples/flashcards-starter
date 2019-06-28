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
    const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const turn = new Turn('object', card);
    
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the players guess', function() {
    const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');  
  });

  it('should return the card', function() {
    const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const turn = new Turn('object', card);
   
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess', function () {
    const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('function', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);

  });

  it('should give the player feedback', function() {
    const card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('function', card);

    expect(turn1.giveFeedback()).to.equal('That is correct! Cheers!!!');
    expect(turn2.giveFeedback()).to.equal('Nope! That is incorrect!');
  })

});