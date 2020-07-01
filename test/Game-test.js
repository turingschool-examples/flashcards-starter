const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', ()=> {
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

  it('should be able to keep track of the current round', () => {
    expect(game.currentRound).to.equal(0);
  });

  describe('Start Method', () => {
    it.skip('should create cards', () => {
      game.start(cards);
      expect(game.cards).to.deep.equal(cards);
    });

    it.skip('should put cards in a deck', () => {
      game.start(cards);
      expect(game.deck).to.deep.equal(cards);
    });
    
    it.skip('should create a new Round using the Deck', () => {
      game.start(cards);
      expect(game.gameRound).to.be.an.instanceOf(Round);
      expect(game.gameRound.deck).to.deep.equal(cards);
    });
    
    it.skip('should update the current round', () => {
      game.start(cards);
      expect(game.currentRound).to.equal(1);
    });
  });

});