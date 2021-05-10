const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

let defaultCard;

describe('Card', function() {

  beforeEach(() => {
    defaultCard = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(defaultCard).to.be.an.instanceof(Card);
  }); 

  it('should have an id', function() {
    expect(defaultCard.id).to.equal(1);
  });

  it('should store a question', function() {
    expect(defaultCard.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store a list of possible answers', function() {
    expect(defaultCard.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', function() {
    expect(defaultCard.correctAnswer).to.equal('sea otter');
  });
});