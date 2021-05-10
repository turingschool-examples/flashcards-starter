const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  it('should be a function', () => {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it.skip('should be an instance of Card', () => {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it.skip('should store a question', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it.skip('should store a list of possible answers', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it.skip('should store the correct answer', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    expect(card.correctAnswer).to.equal('sea otter');
  });
});