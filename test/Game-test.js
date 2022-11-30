const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', function() {

const testData = Object.prototype;
const currentGame = Object.prototype;

this.beforeEach(() =>{
  testData = prototypeQuestions;
  currentGame = new Game();
})

it('should keep track of the currentRound', function() {
  
})

});