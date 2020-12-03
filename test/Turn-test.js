const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, card;

  beforeEach(() => {
    card = new Card(1, 'What is the answer to the Ultimate Question of Life, the Universe, and Everything?', ['42', '41', 'mainlyetcetera'], '42');
    turn = new Turn('42', card);
  });

  it('should be a function', () => {    
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {    
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in an answer', () => {
    expect(turn.answer).to.equal(card.correctAnswer);
  });

  it('should take in an answer and a card', () => {    
    expect(turn.card).to.deep.equal(card);
  });

  describe('return methods', () => {
    it('should return the given guess', () => {
      const guess = turn.returnGuess();

      expect(guess).to.equal(turn.answer);
    });

    it('should return the card', () => {
      const turnCard = turn.returnCard();

      expect(turnCard).to.deep.equal(turn.card);
    });
  });

  describe('evaluation methods', () => {
    let evaluation, question, correctAnswer, givenAnswer, feedback;

    beforeEach(() => {
      question = card.question;
      correctAnswer = card.correctAnswer;
      givenAnswer = turn.answer;      
      evaluation = turn.evaluateGuess();
      feedback = turn.giveFeedback();
    });

    it('should evaluate a correct guess as correct', () => {
      expect(givenAnswer).to.equal(correctAnswer);      
      expect(evaluation).to.equal(true);
    });

    it('should evaluate an incorrect guess as incorrect', () => {
      turn = new Turn('mainlyetcetera', card);
      evaluation = turn.evaluateGuess();
      expect(turn.answer).to.not.equal(correctAnswer);      
      expect(evaluation).to.equal(false);
    });

    it('should give "correct" feedback on correct guess', () => {
      expect(givenAnswer).to.equal(correctAnswer);
      expect(evaluation).to.equal(true);
      expect(feedback).to.equal('correct!');
    });

    it('should give "incorrect" feedback on incorrect guess', () => {      
      turn = new Turn('mainlyetcetera', card);
      evaluation = turn.evaluateGuess();
      feedback = turn.giveFeedback();

      expect(turn.answer).to.not.equal(correctAnswer);
      expect(evaluation).to.equal(false);
      expect(feedback).to.equal('incorrect!');
    });
  });

});



