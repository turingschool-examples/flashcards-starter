const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card = new Card(1, 'Question 1', ['no', 'nope', 'yes'], 'yes')
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('Question 1');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['no', 'nope', 'yes']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('yes');
  });
});
