const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should store user answer', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.userGuess).to.equal('Example');
  });

  it.skip('should store the current card', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.card).to.deep.equal(card);
  });
})
