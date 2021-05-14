const chai = require('chai');
const expect = chai.expect;

    const Card = require('../src/Card');
    const Deck = require('../src/Deck');
    const Game = require('../src/Game');
    const Round = require('../src/Round');

describe.skip('Game', () => {
  
  let card1, card2, card3, data, game;
  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    data = [card1, card2, card3];
    
    game = new Game();
    game.start(data);
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  }); 

  it('should create a round', () => {
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should put some cards in a deck', () => {
      expect(game.currentRound.deck.cards).to.deep.equal(data);
  });

  it('should have access to an instance of deck for each round', () => {
      expect(game.currentRound.deck).to.be.an.instanceOf(Deck);
  })

});
