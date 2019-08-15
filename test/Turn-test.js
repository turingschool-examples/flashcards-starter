const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.a.instanceof(Turn);
  });

  it('should take have a guess and card property', () => {
    const card = new Card(1,'what is 2 + 2?', [1,2,3,4], 4);
    const turn = new Turn(4, card);
    expect(turn.guess).to.equal(4);
    expect(turn.card).to.equal(card);
  });

  it('should return the guess', () => {
    const card = new Card(1,'what is 2 + 2?', [1,2,3,4], 4);
    const turn = new Turn('current guess', card);
    expect(turn.returnGuess()).to.equal('current guess');
  });

  it('should return a card', () => {
    const card = new Card(1,'what is 2 + 2?', [1,2,3,4], 4);
    const turn = new Turn('current guess', card);
    expect(turn.returnCard()).to.equal(card); 
  });

  it('should be able to check if guess is equal to answer', () => {
    const card = new Card(1,'what is 2 + 2?', [1,2,3,4], 4);
    const turn = new Turn(1, card);
    const turn2 = new Turn(4, card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should provide feedback about a guess', () => {
    const card = new Card(1,'what is 2 + 2?', [1,2,3,4], 4);
    const turn = new Turn(1, card);
    const turn2 = new Turn(4, card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});