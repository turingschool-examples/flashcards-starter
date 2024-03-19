const chai = require('chai');
const expect = chai.expect;

const { createCard, takeTurn } = require('../src/card');

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

describe('take turn', () =>{
  it.skip('should be a function',() => {
    expect(takeTurn).to.be.a('function');
  });

  it.skip('should evaluate a guess as correct or false', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 1
    const guess1 = 0
    const evaluation = takeTurn(card.answers[guess], card.correctAnswer)
    const evaluation1 = takeTurn(card.answers[guess1], card.correctAnswer)

    expect(evaluation).to.equal(false)
    expect(evaluation1).to.equal(true)
  });
});
