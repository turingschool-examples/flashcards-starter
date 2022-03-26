const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
  let game;
  let deck;

  beforeEach(() => {
  game = new Game()  
  deck = new Deck(prototypeQuestions)
  }) 

  it('should be a function', () => {
    expect(Game).to.be.a('function');

  })
  
  it('should be an instance of a Game', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should make a new deck', () => {
    game.start()
    expect(game.deck).to.deep.equal(deck)
  })

 


})

