const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('guess', card);
  })
  
  it('should be a function', () => {

    expect(Turn).to.be.a('function');
  })

  it('should instatiate with two arguments', () => {
    
    expect(turn.guess).to.equal('guess');
    expect(turn.card).to.equal(card);
  })

});
