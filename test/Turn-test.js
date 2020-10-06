const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
describe('Turn', function() {
  let card1;
  let turn1;
  let turn2;

  beforeEach(function() {
    card1 = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');

    turn1 = new Turn('Dumbledore', card1);

    turn2 = new Turn('Voldemort', card1);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should be able to store a guess', function() {
    expect(turn1.guess).to.equal('Dumbledore');
    expect(turn2.guess).to.equal('Voldemort');
  });

  it('should store a guess as a string', function() {
    const turn = new Turn(7);
    expect(turn.guess).to.equal('7');
  });

  it('should be able to store a card', function() {
    expect(turn1.card).to.be.an.instanceOf(Card);
    expect(card1.answers[1]).to.equal('Harry Potter');
    expect(card1.correctAnswer).to.equal('Dumbledore');
  });

  it('should be able to return the guess', function() {
    const turn1 = new Turn('Dumbledore', card1);
    const turn2 = new Turn('Harry Potter', card1);

    expect(turn1.returnGuess()).to.equal('Dumbledore');
    expect(turn2.returnGuess()).to.equal('Harry Potter');
  });

  it('should be able to return the card', function() {
    const card = new Card(2, 'Who\'s the Potions Professor?', ['Neville Longbottom', 'Snape', 'Fred and George'])
    const turn = new Turn('Snape', card);

    expect(turn1.returnCard()).to.equal(card1);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the guess is correct', function() {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback after a guess is made', function() {
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  })

});
