const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a guess and a card', function() {
    const card = new Card(1, 'What does the "R" stand for in Roy G. Biv?', ['red', 'retro', 'razzle dazzle'], 'red');
    const turn = new Turn('red', card);

    expect(turn.guess).to.deep.equal('red');
    expect(turn.card.question).to.deep.equal('What does the "R" stand for in Roy G. Biv?');
  });

  it('should return the user\'s guess', function() {
    const card = new Card(2, 'What is the capitol of Minnesota?', ['Minneapolis', 'Duluth', 'St. Paul'], 'St. Paul');
    const turn = new Turn('Minneapolis', card);

    expect(turn.returnGuess()).to.deep.equal('Minneapolis');
  });

  it('should return the card object', function() {
    const card = new Card(3, 'What is the best month of the year?', ['April', 'July', 'October'], 'October');
    const turn = new Turn('October', card);

    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.card.id).to.deep.equal(3);
  });

  it.skip('should determine whether the user\'s guess matches the correct answer on the card', function() {
    const card = new Card(4, 'Which ocean is the Bermuda Triangle located in?' ['Pacific Ocean', 'Atlantic Ocean', 'Arctic Ocean'], 'Atlantic Ocean');
    const turn1 = new Turn('Arctic Ocean', card);
    const turn2 = new Turn('Atlantic Ocean', card);

    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it.skip('should give feedback based on whether the guess was correct', function() {
    const card = new Card(5, 'Which country occupies half of South America\'s western coast?', ['Argentina', 'Venezuela', 'Chile'], 'Chile');
    const turn1 = new Turn('Chile', card);
    const turn2 = new Turn('Venezuela', card);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.giveFeedback(result));
  });
})
