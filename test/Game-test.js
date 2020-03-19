const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;


describe('Game', function () {

  let deck;
  let game;

  beforeEach(function () {
    game = new Game()
    deck = prototypeQuestions
  })

});