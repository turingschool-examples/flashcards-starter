const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

const cards = prototypeQuestions.map(cardInfo => new Card(
  cardInfo['id'],
  cardInfo['question'],
  cardInfo['answers'],
  cardInfo['correctAnswer'])
)

describe('Game', function () {
  it('starts with cards', function () {
    let game = new Game
    game.start()
    expect(game.cards).to.deep.equal(cards)
  });

  it('starts with a deck cards', function () {
    let game = new Game
    game.start()
    expect(game.deck).to.deep.equal(new Deck(cards))
  });

  it('starts with cards', function () {
    let game = new Game
    game.start()
    expect(game.round).to.deep.equal(new Round(new Deck(cards)))
  });
});