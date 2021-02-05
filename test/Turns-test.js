const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const card = new Turn();
    expect(card).to.be.an.instanceof(Turn);
  });

  it('should store players guess', function() {
    const turn = new Turn('waffles');
    expect(turn.guess).to.equal('waffles')
  });

  it('should have an instance of Card', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', currentCard)
    expect(turn.currentCard).to.be.an.instanceof(Card)
  });

  it('should return the players guess', function() {
    const turn = new Turn('winner');
    expect(turn.returnGuess()).to.equal(turn.guess)
  });

  it('should return the current card being played', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('winner', currentCard)
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
  });

  it('should return correct boolean', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard)
    expect(turn.evaluateGuess()).to.equal(true)

    const currentCard2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('wrong', currentCard2);
    expect(turn2.evaluateGuess()).to.equal(false)
  });

  it('should give the correct feedback prompt', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard)
    expect(turn.giveFeedback()).to.equal('correct!')

    const currentCard2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn2 = new Turn('wrong', currentCard2)
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  });
});
