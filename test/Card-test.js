const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const cardData = require('../src/data');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(cardData.prototypeData[0]);

  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');

  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);

  }); 

  it('should have an id', () => {
    expect(card.id).to.equal(1);

  });

  it('should store a question', () => {
    expect(card.question).to.equal(cardData.prototypeData[0].question);

  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(cardData.prototypeData[0].answers);

  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal(cardData.prototypeData[0].correctAnswer);
    
  });

});