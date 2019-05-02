const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/card');

describe('Turn', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const turn = new Turn();
  const turn1 = new Turn('pug', card1);
  const turn2 = new Turn('sea otter', card1);

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    expect(turn1.guess).to.equal('pug');
  });  

  it('should store card', function() {
    expect(turn1.card.id).to.eql(1);
  });  

  it('should return guess', function() {
    expect(turn1.returnGuess()).to.equal('pug');
  });

  it('should return card', function() {
    expect(turn1.returnCard()).to.equal(card1);
  });

  it('should evaluate guess', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', function() {
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});