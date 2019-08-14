const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, 'Who is the main character in "Roadhouse?', ['Chuck Norris', 'Patrick Swayze', 'Burt Reynolds'], 'Patrick Swayze');
    turn = new Turn('Patrick Swayze', card);
  });
  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the user guess', function () {
    expect(turn.returnGuess()).to.equal('Patrick Swayze');
  });

  it('should return the card object being answered', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate the guess against the correct answer', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });
    
  it('should give feedback as to whether the guess is correct or not', function() {
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

});