const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let turn;
let card;

describe('Turn', () => {

  beforeEach(() => {
    card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");
    turn = new Turn('object', card);
    turn2 = new Turn('function', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', () => {
    expect(turn.guess).to.equal('object');
  });

  it('should store a Card object', () => {
    expect(turn.card).to.deep.equal(card);
  });

  it('should return a guess', () => {
    turn.returnGuess()

    expect(turn.returnGuess()).to.equal(turn.guess)
  });

  it('should return a card', () => {
    turn.returnCard()

    expect(turn.returnCard()).to.deep.equal(card)
  });

  it('should be able to evaluate the guess', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  }); 

  it('should be able to return false if the guess is wrong', () => {
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return correct feedback after evaluating answer', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return incorrect feedback after evaluation', () => {
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });   
});