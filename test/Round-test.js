const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })
  
  it.skip('should take in a deck when instantiating', () => {
    const arr = [1, 2, 3];
    const round = new Round(arr);
    expect(round.deck).to.equal(arr);
  })

  it.skip('should start with 0 turns', () => {
    const round = new Round();
    expect(round.turns).to.equal(0);
  })
  
  it.skip('should start with no incorrect guesses', () => {
    const round = new Round();
    expect(round.incorrectGuesses).to.have.length.of(0);
  })


  it.skip('should be able to return the current card', () => {
    const arr = [1, 2, 3];
    const round = new Round(arr);
    expect(round.returnCurrentCard()).to.equal(1);
  })
  
  describe('takeTurn', () => {

    it.skip('should create a new turn instance', () => {
      const arr = [1, 2, 3];
      const round = new Round(arr);  
      round.takeTurn();
      expect(round.turns).to.have.length.of(1);
    })

    it.skip('should update the rounds turn count, regardless of answer', () => {
      const arr = [1, 2, 3];
      const round = new Round(arr);
      round.takeTurn();
      expect(round.turns).to.equal(1);
    })

    it('should prompt the next flash card/update current flash card', () => {
      const arr = [1, 2, 3];
      const round = new Round(arr);
      expect(round.returnCurrentCard()).to.equal(1);
      round.takeTurn();
      expect(round.returnCurrentCard()).to.equal(2);
    })

    it('should evaluate the guess and store incorrect guesses', () => {
      const arr = [{id: 1}, {id: 2}, {id: 3}];
      const round = new Round(arr);
      expect(round.incorrectGuesses).to.have.length.of(0);
      round.takeTurn();
      expect(round.incorrectGuesses).to.have.length.of(1);
    })

    it('should give feedback for guesses', () => {
      const arr = [{ id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      }];
      const round = new Round(arr);
      expect(round.takeTurn('sea otter')).to.equal('correct!');
      expect(round.takeTurn('pug')).to.equal('incorrect!');
    })
  })

  it('should be able to calculate percentage of correct answers for the round', () => {
    const arr = [{ id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }];
    const round = new Round(arr);
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('wrong');
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should be able to end the round', () => {
    const round = new Round();
    expect(round.endRound()).to.equal(`** Round over! ** You answered 0% of the questions correctly!`);
  })

});
