const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3, deck, round;
  beforeEach( function() {
    card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  describe('Initialization', function() {

    it('should be a function', function() {
      expect(Round).to.be.a('function');
    });

    it('should instantiate an object', function() {
      expect(round).to.be.an.instanceof(Round);
    });

    it('should start at turn 0', function() {
      expect(round.turns).to.be.equal(0);
    });

    it('should have a deck of cards', function() {
      expect(round.deck).to.be.instanceof(Deck);
    });

    it('should start with an empty array of incorrect guesses', function() {
      expect(round.incorrect).to.deep.equal([]);
    });
  });

  describe('returnCard()', function() {
    it('should have the first card in the deck be the first', function() {
      expect(round.returnCurrentCard()).to.be.equal(card1);
    });

    it('should be able to return the correct card based on the turn', function() {
      round.turns = 1;
      expect(round.returnCurrentCard()).to.be.equal(card2);
      round.turns = 2;
      expect(round.returnCurrentCard()).to.be.equal(card3);
    });
  });

  describe('takeTurn()', function() {
    it('should be able to take a turn', function() {
      expect(round.turns).to.equal(0);

      round.takeTurn('Example Guess');
      expect(round.turns).to.equal(1);

      round.takeTurn('Example Guess');
      expect(round.turns).to.equal(2);
    });

    it('should tell user if they got it right', function() {
      expect(round.takeTurn('sea otter')).to.be.equal('correct!');
    });

    it('should work for any card', function() {
      round.turns = 1;
      expect(round.takeTurn('gallbladder')).to.be.equal('correct!');
      expect(round.takeTurn('Fitzgerald')).to.be.equal('correct!');
    });

    it('should tell user if they got it wrong', function() {
      expect(round.takeTurn('pug')).to.be.equal('incorrect!');
    });

    it('should work for any card', function() {
      round.turns = 1;
      expect(round.takeTurn('spleen')).to.be.equal('incorrect!');
      expect(round.takeTurn('William')).to.be.equal('incorrect!');
    });

    it('should record failed questions', function() {
      expect(round.incorrect).to.deep.equal([]);
      expect(round.takeTurn('pug')).to.be.equal('incorrect!');
      expect(round.incorrect).to.deep.equal([1]);
      expect(round.takeTurn('spleen')).to.be.equal('incorrect!');
      expect(round.incorrect).to.deep.equal([1, 14]);
      expect(round.takeTurn('William')).to.be.equal('incorrect!');
      expect(round.incorrect).to.deep.equal([1, 14, 12]);
    });
  });

  describe('calculatePercentCorrect', function () {
        it('should be able to calculate % correct', function() {
      expect(round.calculatePercentCorrect()).to.be.equal(0);
      round.takeTurn('sea otter');
      expect(round.calculatePercentCorrect()).to.be.equal(100);
      round.takeTurn('wrong answer');
      expect(round.calculatePercentCorrect()).to.be.equal(50);
      round.takeTurn('wrong answer');
      expect(round.calculatePercentCorrect()).to.be.equal(33.33);
    });
  });

  describe('endRound', function() {
    it('should print a message when the round is over', function() {
      round.deck.cards.forEach((card) => {
        round.takeTurn(card.correctAnswer);
      });
      expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
    });    
  });
});
