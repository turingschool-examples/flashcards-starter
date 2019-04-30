const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn)
  });

  it('should store the user\'s guess', function() {
    const turn = new Turn('my guess');
    expect(turn.userGuess).to.equal('my guess')
  });

  it('should store the current card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('my guess', card);
    expect(turn.currentCard).to.equal(card)
  })
  
  it('should have a function called returnGuess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('my guess', card);
    expect(turn.returnGuess).to.be.a('function')
  })

  it('should be able to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('my guess', card);
    expect(turn.returnGuess()).to.equal('my guess')
  })
});