const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', ()=> {

  it('should be a function', ()=> {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', ()=> {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store the user guess', ()=> {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    expect(turn.guess).to.equal('Is mayonnaise an instrument?');
  });

  it('should store the user card', ()=> {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    expect(turn.card).to.equal(card);
  });

  it('should have a method for returning the guess', ()=> {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return a boolean if the user\'s guess matches the correct answer', ()=> {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('notObject', card);
    const turn2 = new Turn('object', card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return a boolean if the user\'s guess matches the correct answer', ()=> {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('notObject', card);
    const turn2 = new Turn('object', card);
    turn1.giveFeedback();
    turn2.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });

});
