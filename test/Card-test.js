const chai = require('chai');
const expect = chai.expect;

const { createCard, checkForWin } = require('../src/card');

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


describe('checkForWin', function() {
// happy
  it('should return correct! when answer is correct', function() {
    // 1. Setup
      // Create mock player
      // create variable to hold correct word
    const player = {
      name: 'Mike',
      winningWord: []
    };
    const correctWord = 'object';
    // 2. Execution
      // Run appropriate functions that execute the behavior indicated by test title
      // Pass in the arguments needed to test the specific scenario trying to test
    checkForWin('object', correctWord);
    // Assertion
      // make an assertion to verify that after executing certain function, we end up with what we expect
    expect(player.winningWord).to.deep.equal(['object']);
  });
// sad 
  it('should return incorrect! when answer is incorrect', function() {
    // 1. Setup
    // create mock player
    // create variable to hold correct word
    const player = {
      name: 'Mike',
      winningWord: []
    };
    const correctWord = 'object';
    // 2. Execution
    // Run appropriate functions that execute the behavior indicated by test title
    // Pass in the arguments needed to test the specific scenario trying to test
    checkForWin('array', correctWord);
    // 3. Assertion
      // make an assertion to verify that after executing certain function, we end up with what we expect
      expect(player.winningWord).to.deep.equal([]);
  });
});