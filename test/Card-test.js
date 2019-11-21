const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card;
  let cardObj;

  beforeEach( () => {
    cardObj = {
      "id": 1,
      "question": `A score of one better than par on a golf hole is called what?`,
      "answers": ['birdie', 'bogey', 'eagle'],
      "correctAnswer": 'birdie'
    }
    card = new Card(cardObj);
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('A score of one better than par on a golf hole is called what?');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['birdie', 'bogey', 'eagle']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('birdie');
  });
});
