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

  it('should store an attempted answer to a question', function() {
    const turn = new Turn('Hot-dog water');
    expect(turn.guess).to.equal('Hot-dog water');
  }); 
  
  it('should be able to store another guess', function() {
    const turn = new Turn('Barking at night');
    expect(turn.guess).to.equal('Barking at night');
  }); 
  
  it.skip('should store a card', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('Alice', card);
    expect(turn.card).to.equal(card);
  }); 
  
  it.skip('should be able to return the guess', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('Alice', card);
    const makeAGuess = turn.returnGuess();

    expect(makeAGuess).to.equal('Alice');
  });
  
  it.skip('should be able to return the card', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('Alice', card);
    const seeTheCard = turn.returnCard();
    
    expect(seeTheCard).to.equal(card);
  });
  
  it.skip('should return true if the guess is correct', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('Alice', card);
    const isItTrue = turn.evaluateGuess();

    expect(isItTrue).to.equal(true);
  });

  it.skip('should return false if the guess is incorrect', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('White-Rabbit', card);
    const isItTrue = turn.evaluateGuess();

    expect(isItTrue).to.equal(false);
  });

  it.skip('should tell you if your guess is correct', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('Alice', card);
    const howDidIDo = turn.giveFeedback();

    expect(howDidIDo).to.equal('correct!');
  });

  it.skip('should tell you if your guess is incorrect', function() {
    const card = new Card(1, 'Who Are You?', ['White-Rabbit', 'Queen of Hearts', 'Alice'], 'Alice');
    const turn = new Turn('White-Rabbit', card);
    const howDidIDo = turn.giveFeedback();

    expect(howDidIDo).to.equal('incorrect!');
  });
});