const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('it should store a userGuess', function() {
    const turn = new Turn('test guess');
    expect(turn.userGuess).to.equal('test guess');
  });

// how do I check if its a object and not just a string.
  it.skip('it should store a instance of Card', function() {
    const card = new Card(1, 'Question', ['One', 'Two', 'Answer'], 'Answer');
    const turn = new Turn('test guess', card);
    expect(turn.currentCard).to.deep.equal(card);
    expect()
  });




});
