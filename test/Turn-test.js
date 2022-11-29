const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  let newCard;
  let newTurn;
  beforeEach(() => {
    newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    newTurn = new Turn('pug', newCard);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(newTurn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', function() {
    expect(newTurn.guess).to.equal('pug');
  });

  it('should store a new instaniation of Card', function() {
    expect(newTurn.card).to.equal(newCard);
  });

  
});