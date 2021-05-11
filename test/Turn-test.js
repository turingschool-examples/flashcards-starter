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
    const card = new Card(4, 'What is the best meal?', ['Breakfast', 'Lunch', 'Dinner'], 'Breakfast');
    const turn = new Turn('Breakfast', card);

    expect(turn.returnGuess()).to.deep.equal('Breakfast');
  });

  it('should return the card object', function() {
   const card = new Card(6, 'Who was the 8th President of the US?', ['Martin Van Buren', 'Abe Lincoln', 'Thomas Jefferson'], 'Martin Van Buren');
   const turn = new Turn('Martin Van Buren', card);

   expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('should be able to evaluate user guess', function() {
    const card = new Card(5, 'What is the hottest place on Earth?', ['Sahara Desert', 'Death Valley', 'Cairo'], 'Death Valley');
    const turn1 = new Turn('Cairo', card);
    const turn2 = new Turn('Death Valley', card);

    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it('should have a method to give feedback', function() {
    const card = new Card(12, 'What is my favorite season?', ['Summer', 'Winter', 'Fall'], 'Fall');
    const turn = new Turn('Fall', card);
    const turn1 = new Turn('Winter', card);
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  });
});
