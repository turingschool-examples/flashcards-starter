const chai = require('chai');
const expect = chai.expect;


const Turn = require('../src/Turn');


describe ('Turn', function() {

  it('should be a function', function(){
    const turn = new Turn();
    expect(Turn).to.be.a('function');

  });

  it('should take in a string as its first argument', function(){
    const turn1 = new Turn('answer');
    expect('answer').to.be.a('string');

  });

  it('should take in an instance of card as the second argument', function(){
    const turn2 = new Turn('answer', {id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
    expect({id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'}).to.be.an.instanceof(Card);

  });

  it('should return the player guess', function(){
    const turn3 = new Turn('Guess', {id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
    expect(turn3.returnGuess()).to.equal('Guess');
  });

  it('should return the current card', function() {
    const turn3 = new Turn('Guess', {id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
    expect(turn3.returnCard()).to.equal({id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
  });

  it('should check if the guess is the correct answer', function() {
    const turn3 = new Turn('Guess', {id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
    expect(turn3.evaluateGuess()).to.be.a('boolean');
  });

  it('should give feedback to the player', function() {
    const turn3 = new Turn('Guess', {id: 1, question: 'Huh?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No'});
    expect(turn3.giveFeedback()).to.be.a('string');

  });

});
