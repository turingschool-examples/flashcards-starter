const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const testingData = require('../test/TestingData')

describe('Card', function() {
  let card;

  beforeEach( () => {
    card = new Card(testingData[0].id, testingData[0].question, testingData[0].answers, testingData[0].correctAnswer)
  });

  it('should be a function', () =>{
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store an ID', () => {
    expect(card.id).to.equal(testingData[0].id)
  });

  it('should store a question', () => {
    expect(card.question).to.equal(testingData[0].question);
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(testingData[0].answers);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal(testingData[0].correctAnswer);
  });
});
