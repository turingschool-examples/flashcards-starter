const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/card');

describe('Turn', function() {
  let turn;
  beforeEach(function() {
    turn = new Turn();
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a guess and a card object', function() {
   const card = new Card(3, 'What is the largest lake in the US?', ['Lake Tahoe', 'Lake Superior', 'Crater Lake'], 'Lake Superior');
   const turn = new Turn('Lake Superior', card);

   expect(turn.guess).to.deep.equal('Lake Superior');
   expect(turn.card).to.be.an('object');
   expect(turn.card.id).to.deep.equal(3);
  });

  it('should return the user guess', function() {
    const card = new Card(3, 'What is the largest lake in the US?', ['Lake Tahoe', 'Lake Superior', 'Crater Lake'], 'Lake Superior');
    const turn = new Turn('Lake Superior', card);

    expect(turn.returnGuess()).to.deep.equal('Lake Superior');
  });

  it('should return the card object', function() {
   const card = new Card(3, 'What is the largest lake in the US?', ['Lake Tahoe', 'Lake Superior', 'Crater Lake'], 'Lake Superior');
   const turn = new Turn('Lake Superior', card);

   expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('should be able to evaluate user guess', function() {
    const card = new Card(3, 'What is the largest lake in the US?', ['Lake Tahoe', 'Lake Superior', 'Crater Lake'], 'Lake Superior');
    const turn1 = new Turn('Lake Tahoe', card);
    const turn2 = new Turn('Lake Superior', card);

    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it('should give the user feedback based on the guess', function() {
    const card = new Card(3, 'What is the largest lake in the US?', ['Lake Tahoe', 'Lake Superior', 'Crater Lake'], 'Lake Superior');
    const turn = new Turn('Lake Superior', card);
    const turn1 = new Turn('Crater Lake', card);
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  });
});
