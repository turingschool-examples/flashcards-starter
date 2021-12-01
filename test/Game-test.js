const expect = require('chai').expect;
const data = require('../src/data');
const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Game', () => {
  let game, deck, cards;
  beforeEach(function() {
    cards = data.prototypeData.map(e=> {
      return new Card(e['id'], e['question'], e['answers'], e['correctAnswer']);
    })

    deck = new Deck(cards);
    game = new Game;
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  })

  it('should not set current round until start', () => {
    expect(game.currentRound).to.be.undefined;
  })

});