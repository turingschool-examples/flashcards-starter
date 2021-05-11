const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn1, card1, turn2, card2;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('object', card1);
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
    turn2 = new Turn('function', card2)
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should have a guess and a card', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('object', card1)

    expect(turn1.guess).to.equal('object');
    expect(turn1.card).to.equal(card1)
  });

  it('should return the guess', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('object', card1)

    expect(turn1.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn1 = new Turn('object', card1)

    expect(turn1.returnCard()).to.equal(card1);
  });

  it('should evaluate user guess to true or false', ()=> {
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should return feedback on if the guess is correct or not', () =>{
    expect(turn1.giveFeedback()).to.equal('You are correct!');
    expect(turn2.giveFeedback()).to.equal('You are incorrect!');
  })

})
