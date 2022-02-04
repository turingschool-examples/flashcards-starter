const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const data = require('../src/data');

describe('Game', function() {
  let round
  let deck
  let card1
  let card2
  let card3
  let turn


  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
     deck = new Deck([card1, card2, card3]);
     turn = new Turn('correct!', card3);
     round = new Round();
     game = new Game(deck);
 });


   it('should be a function', function() {
     expect(Game).to.be.a('function');
   });

   it('should be an instance of Round', function() {
     expect(game).to.be.an.instanceof(Game);
   });

   it('should have a method that creates cards for a new round', function () {
     game.createCards()
     expect(game.everyCard[0].id).to.equal(1);
   });

   it('should be able to put cards in a deck', function () {
     game.createCards()
     game.createDeck()
     expect(game.deck.cards[2].id).to.equal(3);
   });

   it('should be able to create a new round', function () {
     game.start()
     expect(game.currentRound).to.be.an.instanceof(Round);
   });

 });
