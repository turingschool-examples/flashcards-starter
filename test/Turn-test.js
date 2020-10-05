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

  it('should store cards', function() {
    const card = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');
    const turn = new Turn('Dumbledore', card);
    expect(turn.card).to.be.an.instanceOf(Card);
    expect(card.answers[1]).to.equal('Harry Potter');
    expect(card.correctAnswer).to.equal('Dumbledore');
  });

});
