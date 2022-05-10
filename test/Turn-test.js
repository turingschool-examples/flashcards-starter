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

  it.skip('should have a returnGuess function', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.returnGuess()).to.equal('Example');
  });

  it.skip('should have a returnCard function', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it.skip('should have a evaluateGuess function', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should have a giveFeedback function', function() {
    const card = new Card(1,'Example?',['example','Example'], 'Example');
    const turn = new Turn('Example', card);

    expect(turn.giveFeedback(turn.evaluateGuess())).to.equal('correct!');
  });
})
