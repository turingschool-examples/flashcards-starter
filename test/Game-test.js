const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, cards, deck, round, game;
