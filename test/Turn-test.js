const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {
  let newCard;
  let newTurn;
  beforeEach(() => {
    newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    newTurn = new Turn('pug', newCard);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(newTurn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', () => {
    expect(newTurn.guess).to.equal('pug');

    const newTurn1 = new Turn('sea otter');
    expect(newTurn1.guess).to.equal('sea otter');
  });

  it('should store a new instaniation of Card', () => {
    expect(newTurn.card).to.equal(newCard);
  });

  it('should have a method that returns the guess', () => {
    newTurn.returnGuess();
    expect(newTurn.returnGuess()).to.equal('pug');
  });

  it('should have a method that returns the card object', () => {
    newTurn.returnCard();
    expect(newTurn.returnCard()).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

  it('should have a method that evaluates the user\'s guess', () => {
    newTurn.evaluateGuess();
    expect(newTurn.evaluateGuess()).to.equal(false);

    const newTurn1 = new Turn('sea otter', newCard);
    newTurn1.evaluateGuess();
    expect(newTurn1.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', () => {
    newTurn.giveFeedBack();
    expect(newTurn.giveFeedBack()).to.equal('incorrect!');

    const newTurn1 = new Turn('sea otter', newCard);
    newTurn1.giveFeedBack();
    expect(newTurn1.giveFeedBack()).to.equal('correct!');
  });
});