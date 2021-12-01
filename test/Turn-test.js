const expect = require('chai').expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  it('should instatiate a turn', function() {
    let turn = new Turn()

    expect(turn).to.be.an.instanceof(Turn)
  })
  it('should have a guess and a card', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    expect(card).to.be.an.instanceof(Card);

    let turn = new Turn('userGuess', card);
    expect(turn.guess).to.equal('userGuess', card);
  })
  it('should show a guess', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    let turn = new Turn('userGuess', card);

    expect(turn.returnGuess()).to.equal('userGuess')
  })
  it('should show a card', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    let turn = new Turn('userGuess', card);

    expect(turn.returnCard()).to.equal(card);
  })
  it('should evalutate users guess', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    let turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);

    let turn1 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(false);
  })
  it('should give feedback on guess', function() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    let turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!');

    let turn1 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  })
});
