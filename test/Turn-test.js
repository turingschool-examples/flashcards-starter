const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should take a users guess', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    const turn = new Turn('potatoes', card);
    expect(turn.userGuess).to.equal('potatoes');
  })

  it('should store a card', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    const turn = new Turn('potatoes', card);
    expect(turn.card).to.be.a.instanceof(Card);
  })

  it('should be able to return the users guess', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    const turn = new Turn('potatoes', card);
    expect(turn.returnGuess()).to.equal('potatoes');
  })

  it('should be able to return the current card', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    const turn = new Turn('potatoes', card);
    expect(turn.returnCard()).to.equal(card);
  })

  it('should be able to evaluate the answer', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    let turn = new Turn('potatoes', card);
    expect(turn.evaluateGuess()).to.equal(true);
    turn = new Turn('carrots', card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should be able to give feedback on an answer', function() {
    const card = new Card(1,'What is my favorite food?', ['potatoes', 'carrots', 'green beans'], 'potatoes');
    const turn = new Turn('potatoes', card);
    expect(turn.giveFeedback(true)).to.equal('Correct!');
    expect(turn.giveFeedback(false)).to.equal('Incorrect!');
  })
})
