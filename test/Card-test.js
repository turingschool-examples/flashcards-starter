const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess } = require('../src/card');


describe("Tests with beforeEach", function () {
  let testRan = 0;
  beforeEach(function () {
    testRan++;
    console.log("Intialising...Test" + testRan);
  });
describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});
describe('evaluateGuess', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function');
  });
  it('should evaluate if answer is correct', function(){
    const newCard = createCard(3, 'what?',['object', 'job', 'car'], 'job')
    const answer = evaluateGuess('job', newCard)
    expect(answer).to.equal('Correct!')
  });

  it('should evaluate if answer is incorrect', function(){
    const newCard = createCard(3, 'what?',['cat', 'job', 'car'], 'job')
    const answer = evaluateGuess('cat', newCard)
    expect(answer).to.equal('Incorrect!')
  })
})


});
