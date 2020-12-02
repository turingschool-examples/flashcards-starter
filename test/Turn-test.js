const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;

  beforeEach(() => {
    turn = new Turn();
  });

  it.skip('should be a function', () => {    
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', () => {    
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should take in an answer', () => {
    turn = new Turn('42');

    expect(turn.answer).to.equal('42');
  });

  beforeEach(() => {
    card = new Card();
    turn = new Turn('42', card);
  });

  it.skip('should take in an answer and a card', () => {    
    expect(turn.card).to.deep.equal(card);
  });

  it.skip('should return the given guess', () => {
    const guess = turn.returnGuess();

    expect(guess).to.equal('42');
  });

  it.skip('should return the card', () => {
    const turnCard = turn.returnCard();

    expect(turnCard).to.deep.equal(turn.card);
  });

  describe('methods', () => {
    let evaluation, question, correctAnswer, givenAnswer, feedback;

    beforeEach(() => {
      question = card.question;
      correctAnswer = card.correctAnswer;
      givenAnswer = turn.answer;
      evaluation = turn.evaluateGuess(guess);
      feedback = turn.feedback;
    });

    it.skip('should evaluate a correct guess as correct', () => {
      expect(answer).to.equal(correctAnswer);
      expect(evaluation).to.equal(true);
    });

    it.skip('should evaluate an incorrect guess as incorrect', () => {
      expect(answer).to.not.equal(correctAnswer);
      expect(evaluation).to.equal(false);
    });  

    it.skip('should give correct feedback on correct guess', () => {
      expect(answer).to.equal(correctAnswer);
      expect(evaluation).to.equal(true);
      expect(feedback).to.equal('correct!');
    });
  });

});



