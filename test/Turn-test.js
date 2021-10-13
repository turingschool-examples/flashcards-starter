const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take two arguments', function() {
    const turn = new Turn('Hotdog', {id: 1, question: "What is David's favorite food?", answers: ["Hotdog", "Pizza", "Spaghetti"], correctAnswer: "Spaghetti",});
    expect(turn.guess).to.equal('Hotdog');
    expect(turn.card).to.deep.equal({id: 1, question: "What is David's favorite food?", answers: ["Hotdog", "Pizza", "Spaghetti"], correctAnswer: "Spaghetti",});
  });

  it('should be able to return the guess', function () {
    const turn = new Turn('Blue', {id: 2, question: "What is David's favorite color?", answers: ["Blue", "Red", "Green"], correctAnswer: "Blue",});
    expect(turn.returnGuess()).to.equal("Blue");
  });

  it('should be able to return the card', function () {
    const turn = new Turn('Fish', {id: 3, question: "What is David's favorite animal?", answers: ["Panther", "Bobcat", "Fish",], correctAnswer: "Fish",});
    expect(turn.returnCard()).to.deep.equal({id: 3, question: "What is David's favorite animal?", answers: ["Panther", "Bobcat", "Fish",], correctAnswer: "Fish",});
  });

  it('should be able to evaluate the guess', function () {
    const turn = new Turn('Fall', {id: 4, question: "What is David's favorite season?", answers: ["Winter", "Spring", "Summer", "Fall",], correctAnswer: "Fall",});
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback', function () {
    const turn = new Turn('Horror', {id: 5, question: "What is David's favorite movie genre?", answers: ["Romance", "Horror", "Comedy"], correctAnswer: "Horror",});
    expect(turn.giveFeedback()).to.equal('correct!');
  });
    
});
    
