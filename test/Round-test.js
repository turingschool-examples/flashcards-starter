const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
    let round;
    let deck;
    let currentCard;
    let turn;

    beforeEach(() => {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        round.startRound();
        currentCard = round.returnCurrentCard();
    });

    it('should be a function', function () {
        expect(Round).to.be.a('function');
    });

    it('should return current card at start of new round', function() {
      expect(round.returnCurrentCard()).to.deep.equal(currentCard);
    });
      
    it('should take a turn and return feedback', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const round = new Round([card1],[card2]);
      round.startRound();
      
    });
  });
    
    
