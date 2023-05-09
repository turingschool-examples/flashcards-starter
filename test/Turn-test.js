const chai = require('chai');
const expect = chai.expect;

const { turn } = require('../src/turn');
const { createCard } = require('../src/card');

describe('turn', function() {
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
      turn('object', correctWord);
      // Assertion
        // make an assertion to verify that after executing certain function, we end up with what we expect
      expect(player.winningWord).to.deep.equal(['object']);
    });
  // sad 
    it.skip('should return incorrect! when answer is incorrect', function() {
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
      turn('array', correctWord);
      // 3. Assertion
        // make an assertion to verify that after executing certain function, we end up with what we expect
        expect(player.winningWord).to.deep.equal([]);
    });
  });