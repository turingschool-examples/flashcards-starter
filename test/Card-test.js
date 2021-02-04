const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card;

  beforeEach('assign card', function() {
    card = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('Why do birds suddenly appear every time you are near?');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(["Who knows", "My mom is part of the Audubon society", "I smell like flowers"]);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal("I Smell Like Flowers");
  });
});
