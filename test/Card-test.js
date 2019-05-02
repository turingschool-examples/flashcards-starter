const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Card', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('Turn', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  const turn = new Turn('my guess', card);

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn)
  });

  it('should store the user\'s guess', function() {
    expect(turn.userGuess).to.equal('my guess')
  });

  it('should store the current card object', function() {
    expect(turn.currentCard).to.equal(card)
  });
  
  it('should have a function called returnGuess', function() {
    expect(turn.returnGuess).to.be.a('function')
  });

  it('should be able to return the users guess', function() {
    expect(turn.returnGuess()).to.equal('my guess')
  });

  it('should be able to return the card object', function() {
    expect(turn.returnCard()).to.equal(card)
  });

  it('should evaluate the current guess and return a boolean', function() {
    const turn1 = new Turn('my guess', card);
    const turn2 = new Turn('object', card)
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  });

  it('should be able to give feedback depending on if the answer is correct', function() {
    const turn1 = new Turn('my guess', card);
    const turn2 = new Turn('object', card)
    expect(turn1.giveFeedback()).to.equal('incorrect!')
    expect(turn2.giveFeedback()).to.equal('correct!')
  });
});

