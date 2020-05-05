const chai = require('chai');
const expect = chai.expect;

// const Round = require('../src/Round')
// const Deck = require('../src/Deck')
// const Card = require('../src/Card')
const Game = require('../src/Game')

describe('Game', () => {
  // let card1;
  // let card2;
  // let card3;
  // let deck1;
  // let deck2;
  // let round;
  let game;

  beforeEach(() => {
    // card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // deck1 = new Deck([card1, card2, card3])
    // deck2 = new Deck([card2, card3])
    // round = new Round(deck1)
    game = new Game()
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  }) 

  it('should be an instance of Deck', () => {
    expect(game).to.be.an.instanceOf(Game)
  }) 

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.equal(0)
  })

  it('should start the game', () => {
    game.start()
    expect(game.round).to.be.an.instanceOf(Round);
    expect(game.round.deck[0]).to.be.an.instanceOf(Card);
    expect(game.round.deck[0].id).to.equal(prototypeData[0].id)
  })

})