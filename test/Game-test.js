const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', function () {
  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have data and currentRound properties', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const game = new Game(deck);
    expect(game.data).to.equal(deck);
  });

  it('should create cards from an array of data', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const data = [card1, card2, card3]
    const game = new Game(data)
    game.createCard()
    game.createDeck()
    game.createRound()
    expect(game.createCard()).to.deep.equal(data);
  });

  it('should instantiate a deck from an array of cards', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const data = [card1, card2, card3]
    const game = new Game(data)
    game.createCard()
    game.createDeck()
    game.createRound()
    expect(game.createDeck()).to.be.an.instanceof(Deck);
  });

  it('should instantiate a round of the game', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const data = [card1, card2, card3]
    const game = new Game(data)
    game.createCard()
    game.createDeck()
    game.createRound()
    expect(game.createRound()).to.be.an.instanceof(Round);
  });

  // NOTE: Unable to create a test for the following:
  // game.start() method should appear in game.js as follows and be called in index.js:
  // start() {
  //   this.printMessage(this.createDeck(), this.createRound)
  //   this.printQuestion(this.createRound())
  // }

})