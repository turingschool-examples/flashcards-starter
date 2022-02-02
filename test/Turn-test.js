const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a turn', function() {
    const card = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Gaggle');
    const turn = new Turn('guess', card);

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should return the guess of the user', function() {
    const card = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Gaggle');
    const turn = new Turn('guess', card);

    expect(turn.returnGuess()).to.equal(turn.guess);
  });
});
