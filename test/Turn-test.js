const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn('capybara', new Card(1, 'What is the best rodent?', ['rat', 'chipmunk', 'capybara'], 'capybara'));
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a guess', () => {
    expect(turn.guess).to.equal('capybara');
  });

  it('should have an instance of card', () => {
    expect(turn.card).to.be.an.instanceOf(Card);
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What is the best rodent?',
      answers: ['rat', 'chipmunk', 'capybara'],
      correctAnswer: 'capybara'
    });
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('capybara');
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What is the best rodent?',
      answers: ['rat', 'chipmunk', 'capybara'],
      correctAnswer: 'capybara'
    });
  });

  it('should check if guess matches answer', () => {
    expect(turn.evaluateGuess()).to.equal(true);

    turn.guess = 'rat';

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback if the answer is right or wrong', () => {
    expect(turn.giveFeedBack()).to.equal('correct!');

    turn.guess = 'rat';

    expect(turn.giveFeedBack()).to.equal('incorrect!');
  });
});