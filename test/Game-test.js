const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const data = require('../src/data');

describe.skip('Game', ()=> {
  var game;
  var cards;
  beforeEach(() => {
    game = new Game();
    cards = [{
      "id": 1,
      "question": "How do you fly?",
      "answers": ["you don't", "you flap your arms", "you steal an airplane"],
      "correctAnswer": "you don't"
    }, {
      "id": 2,
      "question": "Can I eat a hotdog?",
      "answers": ["yes", "no", "you can eat several"],
      "correctAnswer": "you can eat several"
    }, {
      "id": 3,
      "question": "Dogs or cats?",
      "answers": ["dogs", "cats", "robots"],
      "correctAnswer": "robots"
    }]; 
  });

  describe('Start Method', () => {
    it('should create cards', () => {
      game.start(cards);
      expect(game.deck.cards[0]).to.be.an.instanceOf(Card);
    });

    it('should put cards in a deck', () => {
      game.start(cards);
      expect(game.deck.cards).to.deep.equal(cards);
    });
    
    it('should create a new Round using the Deck', () => {
      game.start(cards);
      expect(game.currentRound).to.be.an.instanceOf(Round);
      expect(game.currentRound.deck.cards).to.deep.equal(cards);
    });
    
    it('should update and keep track of the current round', () => {
      game.start(cards);
      expect(game.currentRound.deck.cards).to.deep.equal(cards);
      game.newRound(data.prototypeData)
      expect(game.currentRound.deck.cards).to.deep.equal(data.prototypeData);
    });

  });

});