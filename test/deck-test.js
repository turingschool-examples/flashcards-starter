const chai = require('chai');
const expect = chai.expect;

const { 
    createDeck,
} = require('../src/deck');

describe('deck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
      });
      
});