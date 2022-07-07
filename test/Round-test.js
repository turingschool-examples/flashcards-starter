const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn')

describe('Round', function() {
    let round;
    let deck;
    let turn1;
    let turn2;
    let card1;
    let card2;
    let card3;
    beforeEach (() => {
         card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
         card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
         card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

         deck = new Deck([card1, card2, card3]);
         round = new Round(deck);
         turn1 = new Turn("pug", card1);
         turn2 = new Turn("gallbladder", card2);

    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should start out with 0 turns', function() {
        expect(round.turns).to.equal(0);
    });

    it('should start out with an empty array of incorrect guesses', function() {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
    
    it('the current card should be the first card in the deck', function() {
        expect(round.deck).to.equal(deck);
    });

    it('should make sure the current card is the first card in the deck', function() {
       expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should allow the user to take a turn', function() {
        expect(round.takeTurn).to.be.a('function');
    });

    it('should increase the turn count by 1 every time', function() {
        round.takeTurn();
        expect(round.turns).to.equal(1);
    });

});






