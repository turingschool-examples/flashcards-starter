const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  beforeEach(() => {
    turn = new Turn('sample correct answer', 
    { id: 'sampleId',
      question: 'sample question',
      answers: ['sample incorrect answer', 'sample correct answer'],
      correctAnswer: 'sample correct answer' })
  });

  it('should be a function', () => expect(Turn).to.be.a('function'));

  it('should take in person\'s answer and Card object', () => expect(turn.card.id).to.equal('sampleId'));

  it('should have a method that returns the guess', () => 
    expect(turn.returnGuess()).to.equal('sample correct answer'));

  it('should have a method that returns the card', () => {
    expect(turn.returnCard()).to.deep.equal({ id: 'sampleId', question: 'sample question', answers: ['sample incorrect answer', 'sample correct answer'], correctAnswer: 'sample correct answer' });
  });

  it('should return true if the user\'s guess matches the correct answer on the card', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the user\'s guess doesn\'t match the correct answer on the card', () => {
    const turn1 = new Turn('wrong answer', 
    { id: 'sampleId', question: 'sample question', 
    answers: ['sample incorrect answer', 'sample correct answer'], correctAnswer: 'sample correct answer' });
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should return \'correct!\' for a correct guess', () => expect(turn.giveFeedback()).to.equal('correct!'));

  it('should return \'incorrect!\'for an incorrect guess.', () => {
    turn.guess = 'idk';
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});