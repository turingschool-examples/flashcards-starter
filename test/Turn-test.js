const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store a guess', function() {
    const turn1 = new Turn('Harry Potter');
    const turn2 = new Turn('Ron Weasley');
    expect(turn1.guess).to.equal('Harry Potter');
    expect(turn2.guess).to.equal('Ron Weasley');
  });

  it('should store a guess as a string', function() {
    const turn = new Turn(7);
    expect(turn.guess).to.equal('7');
  });

  it('should be able to store a card', function() {
    const card = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const turn = new Turn('Dumbledore', card);
    expect(turn.card).to.be.an.instanceOf(Card);
    expect(card.answers[1]).to.equal('Harry Potter');
    expect(card.correctAnswer).to.equal('Dumbledore');
  });

  it('should be able to return the guess', function() {
    const card = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const turn1 = new Turn('Dumbledore', card);
    const turn2 = new Turn('Harry Potter', card);

    expect(turn1.returnGuess()).to.equal('Dumbledore');
    expect(turn2.returnGuess()).to.equal('Harry Potter');
  });

  it('should be able to return the card', function() {
    const card1 = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const card2 = new Card(2, 'Who\'s the Potions Professor?', ['Neville Longbottom', 'Snape', 'Fred and George'])
    const turn1 = new Turn('Dumbledore', card1);
    const turn2 = new Turn('Snape', card2);

    expect(turn1.returnCard()).to.equal(card1);
    expect(turn2.returnCard()).to.equal(card2);
  });

  it('should evaluate if the guess is correct', function() {
    const card = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const turn1 = new Turn('Dumbledore', card);
    const turn2 = new Turn('Voldemort', card);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback after a guess is made', function() {
    const card = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const turn1 = new Turn('Dumbledore', card);
    const turn2 = new Turn('Voldemort', card);

    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  })

});
