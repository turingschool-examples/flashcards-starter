const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, cards, deck, round, game;

  beforeEach( () => {
     card1 = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'],'Poe');

     card2 = new Card(2, 'Where did Sherlock Holmes confront Professor Moriarty?',['Victoria Falls', 'Niagra Falls', 'Bushkill Falls'],'Reichenbach Falls');

     card3 = new Card(3, 'What was the profession of G.K. Chestertons famous detective?',['Police Officer', 'Socialite', 'University Professor'],'Catholic Priest');

     cards = [card1, card2, card3]
     deck = new Deck(cards);

     round = new Round(deck);

     game = new Game(round);
  });

  it('should have a start function', function() {

      expect(game.start).to.be.a('function');
    });

    it('should start a game with deck & prompts', function() {

      game.start();
      expect(game.currentRound.turns).to.equal(0);
      expect(game.currentRound.deck.cards).to.be.an('array');
      expect(game.printMessage).to.be.a('function');
      expect(game.printQuestion).to.be.a('function');
    });

  })
