const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\s guess', function() {
    const turn = new Turn('pug', 'What is Robbie\s favorite animal');
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card', function() {
    let card = new Card(1,2,3,4);
    const turn = new Turn('pug', card);
    expect(turn.card).to.equal(card);
  });

  it('should be able return the user\s guess', function() {
    const turn = new Turn('pug', new Card(1,2,3,4));
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able return the current card', function() {
    let card = new Card(1,2,3,4);
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal(card);
  });
});
