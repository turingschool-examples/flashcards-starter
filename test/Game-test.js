const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should make sure that it knows what round it is currently', () => {
    expect(game.currentRound).to.be.equal(0);
    game.startNewRound(deck);
    expect(game.currentRound).to.be.equal(1);
  }); 

  it('createCard() should be a function', () => {
    expect(game.createCard).to.be.a('function');
  });

  it('when createCard() is invoked should instantialize a new instance of Card', () => {
    let card = game.createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('createDeck() should be a function', () => {
    expect(game.createDeck).to.be.a('function');
  });

  it('when createDeck() is invoked should instantialize a new instance of Deck', () => {
    let deck = game.createDeck([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be a function', () => {
    expect(game.startNewRound).to.be.a('function');
  });

  it('when startNewRound() is invoked should instantialize a new instance of Round', () => {
    let round = game.startNewRound(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 
});