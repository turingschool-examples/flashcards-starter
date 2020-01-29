const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');

describe('Game',function(){
  let game;
  beforeEach(function(){
    game = new Game()
  });

  it('should keep track of the currentRound',function(){
    expect(game.currentRound).to.equal(0);
  });
  it('should be able to create a new deck',function(){
    expect(game.newDeck(prototypeQuestions)).to.be.a('array')
  });

  it('should have an array of objects',function(){
    expect(game.newDeck(prototypeQuestions)[1]).to.be.a('object');
  });

});
