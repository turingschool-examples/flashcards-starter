const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card1 = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
    card2 = new Card(5, 'Which dog breed most resembles the data type that indicates a true or false value?', ['Golden Retriver', 'Cocker Spaniel', 'Sheepdog', 'Bolognese'], 'Bolognese');
    card3 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
  });

  it('should be able to store a question', function() {
    expect(card1.question).to.equal('An object allows you to define a set of related information using what kind of pairs?');
    expect(card2.question).to.equal('Which dog breed most resembles the data type that indicates a true or false value?')
  });

  it('should be able to store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['object-subject', 'key-value', 'index-array']);
    expect(card2.answers).to.deep.equal(['Golden Retriver', 'Cocker Spaniel', 'Sheepdog', 'Bolognese']);
  });

  it('should be able to store the correct answer', function() {
    expect(card1.correctAnswer).to.equal('key-value');
    expect(card2.correctAnswer).to.equal('Bolognese');
  });
});
