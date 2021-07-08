const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card1, card2;

  beforeEach('instantiate a card from the Card class', () => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    card2 = new Card(2, 'What is Mark\'s dog\'s name?', ['Rover', 'Mr. Wiggles', 'Rudder'], 'Rudder');

  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card1).to.be.an.instanceof(Card);
    expect(card2).to.be.an.instanceof(Card);
  });

  it('should store a question', () => {
    expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card2.question).to.equal('What is Mark\'s dog\'s name?');
  });

  it('should store a list of possible answers', () => {
    expect(card1.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card2.answers).to.deep.equal(['Rover', 'Mr. Wiggles', 'Rudder']);
  });

  it('should store the correct answer', () => {
    expect(card1.correctAnswer).to.equal('object');
    expect(card2.correctAnswer).to.equal('Rudder');
  });

});
