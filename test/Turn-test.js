const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with two arugments', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('guess', card);

    expect(turn).to.have.property('guess');
  });

  it('returnGuess method should return player guess', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('mutator method', card);

    expect(turn.returnGuess()).to.deep.equal('mutator method');
  });

  it('returnCard method should return the card', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('mutator method', card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('evaluateGuess method should return true when guess is correct', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('mutator method', card);

    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('evaluateGuess method should return false when guess is incorrect', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('wild guess', card);

    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('giveFeedback method should return correct! when guess is correct', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('mutator method', card);

    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });

  it('giveFeedback method should return incorrect! when guess is incorrect', function() {
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const turn = new Turn('a wrong answer', card);

    expect(turn.giveFeedback()).to.deep.equal('incorrect!');
  });

});
