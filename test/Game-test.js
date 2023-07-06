const chai = require('chai');
const expect = chai.expect;

const {printMessage, printQuestion, start, initiateDeck} = require('../src/game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game Start', function() {
  it('should create a deck', function() {
    const deck = initiateDeck(prototypeQuestions);

    expect(deck).to.deep.equal(prototypeQuestions);
    
  })
})