const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should contain userGuess and card keys', function() {
    const card = new Card(001, 'Who run Barter Town?', ['Aunty Entity', 'Master Blaster', 'Mad Max'], 'Master Blaster');
    const turn = new Turn('Master Blaster', card);
    expect(turn.userGuess).to.equal('Master Blaster');
    expect(turn.card.id).to.equal(001);
  });

  it('should have a method to return user guess', function() {
    const card = new Card(001, 'Who run Barter Town?', ['Aunty Entity', 'Master Blaster', 'Mad Max'], 'Master Blaster');
    const turn = new Turn('Master Blaster', card);
    expect(turn.returnGuess()).to.equal('Master Blaster');
  });

  it('should have a method to return the card', function() {
    const card = new Card(001, 'Who run Barter Town?', ['Aunty Entity', 'Master Blaster', 'Mad Max'], 'Master Blaster');
    const turn = new Turn('Master Blaster', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should have a method that returns a boolean indicating if the user guess matches the correct answer on the card', function() {
    const card = new Card(001, 'Who run Barter Town?', ['Aunty Entity', 'Master Blaster', 'Mad Max'], 'Master Blaster');
    const turn1 = new Turn('Master Blaster', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    const turn2 = new Turn('Mad Max', card);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should have a method that returns either `incorrect!` or `correct!` based on whether the guess is correct or not', function() {
    const card = new Card(001, 'Who run Barter Town?', ['Aunty Entity', 'Master Blaster', 'Mad Max'], 'Master Blaster');
    const turn1 = new Turn('Master Blaster', card);
    expect(turn1.giveFeedback()).to.equal('Correct!');
    const turn2 = new Turn('Mad Max', card);
    expect(turn2.giveFeedback()).to.equal('Incorrect!');
    })
});