const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;
  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  });

  it('should take a guess as an argument', function() {
    expect(turn.guess).to.deep.equal('pug');
  })

  it('should take a card object', function() {
    expect(turn.card).to.deep.equal(card);
    })

  it('should have a method that returns the guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should have a method that returns the card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card)
  } );

  it('should be able to evaluate guess when wrong', function(){
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should be able to give feedback', function() {
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal(`incorrect!`);
  })

// should I do a describe block for if the answer is correct? Or... any sad cases?



})
