const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(Turn).to.be.an.instanceof(Card);
  });

  it('should store a guess', function() {
    const turn = new Turn('apple');
    expect(turn.guess).to.equal('apple');
  })

  it('should store a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('apple', card);
    expect(card.id).to.deep.equal(1);
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  })
});
