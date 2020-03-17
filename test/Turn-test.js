const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')
describe('Turn', function() {

  it('the turn should hold a users guess', function() {
    const turn = new Turn('Hello World');
    expect(turn.guess).to.equal('Hello World');
  });

  it('Should have a card Object', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('potato', card);
    expect(turn.guess).to.equal('potato');
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('Should return the users guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.be.an.instanceof(Card);
    
    turn.returnGuess()

    expect(turn.returnGuess()).to.equal('pug')
  });

  it('Should return the card of the object instance turn', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sushi', card);
    
    expect(turn.guess).to.equal('sushi');
    expect(turn.card).to.be.an.instanceof(Card);

    turn.returnGuess()
    expect(turn.returnGuess()).to.equal('sushi')

    turn.returnCard()
    expect(turn.returnCard()).to.equal(turn.card) 
  });

  it('Should return the false if guess is not sea otter', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.be.an.instanceof(Card);

    turn.returnGuess()
    expect(turn.returnGuess()).to.equal('pug')

    turn.returnCard()
    expect(turn.returnCard()).to.equal(turn.card) 

    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.equal(false) 
  });

  it('Should return the incorrect! if guess is not sea otter', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.be.an.instanceof(Card);

    turn.returnGuess()
    expect(turn.returnGuess()).to.equal('pug')

    turn.returnCard()
    expect(turn.returnCard()).to.equal(turn.card) 

    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.equal(false) 
    
    turn.giveFeedback(card)
    expect(turn.giveFeedback()).to.equal("incorrect!")
  });
  
});