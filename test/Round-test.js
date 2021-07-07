const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1,'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');

    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'],'mutator method');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have the property of deck assigned to the deck argument', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should have the property of currentCard that defaults to the first card in the deck', function() {
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('should have the property of turns that defaults to 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have the property of incorrectGuesses that is assigned to an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('returnCurrentCard()', function () {

    it('should be a function', function () {
      expect(round.returnCurrentCard).to.be.a('function');
    });

    it('should return the card in play', function() {
      expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
    });

  });

  describe('takeTurn()', function() {

    it('should be a function', function() {
      expect(round.takeTurn).to.be.a('function');
    });

    it('should update turns count', function() {
      expect(round.turns).to.equal(0);
      round.takeTurn();
      expect(round.turns).to.equal(1);
      round.takeTurn();
      round.takeTurn();
      expect(round.turns).to.equal(3);
    });

    it('should evaluate a guess as correct', function() {
      expect(round.takeTurn('object')).to.equal('correct!');
    });

    it('should evaluate a guess as incorrect', function() {
      turn = new Turn('function', card1);
      expect(round.takeTurn(turn)).to.equal('incorrect!');
    });

    it('should update the current card to the next card in the deck', function() {
      round.takeTurn();
      expect(round.currentCard.id).to.equal(2);
    });

    it('should give feedback on incorrect answer', function() {
      expect(round.takeTurn('array')).to.equal('incorrect!');
    });

    it('should give feedback on correct answer', function() {
      expect(round.takeTurn('object')).to.equal('correct!');
    });

    it('should store the card id of an incorrect guess', function() {
      round.takeTurn('array');
      expect(round.incorrectGuesses[0]).to.equal(1);
    });

  });
});
