const chai = require('chai');
const expect = chai.expect;

// const data = require('./data');
// const prototypeQuestions = data.prototypeData;
// const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
let game;

beforeEach(() => {
    game = new Game();
    });

    it('should a function', () => {
        expect(Game).to.be.a('function')
    });

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceof(Game)
    });
});