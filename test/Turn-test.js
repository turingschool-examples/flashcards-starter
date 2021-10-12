const expect = require('chai').expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it.skip('should be a function', function() {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn).to.be.an.instanceof(Turn)
  });

  it.skip('should store a guess and a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    // guess argument should match one of the card answer options
    // card argument should be an instance of the Card class
    
    // expect turn.guess === guess, turn.card === card
    expect(turn.guess).to.equal('array');
    expect(turn.card)to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    })
  });

  it.skip('should take in a guess and a card', function() {

  });

  it.skip('should take in a guess and a card', function() {

  });
});

// Test suites should test all functionality, including:
//  Class default properties
//  Class methods
//  Anything that updates class properties
