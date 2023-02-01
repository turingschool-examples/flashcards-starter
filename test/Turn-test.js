const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card, turn;
  
  beforeEach('turn instance', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user guess', () => {
    expect(turn.guess).to.equal('pug');
    expect(turn.guess).to.be.a('string');
  });  

  it('should store the current card in play', () => {
    expect(turn.chosenCard).to.be.an.instanceof(Card);
    expect(turn.chosenCard).to.be.an('object');
    expect(turn.chosenCard.id).to.equal(1);
  });  

  it('should be able to show guess', () => {
    const showGuess = turn.returnGuess()

    expect(showGuess).to.be.a('string');
    expect(showGuess).to.equal('pug');
  });
});