const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
// const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

    it('should be a function', function() {
        const newRound = new Round();
        expect(Round).to.be.a('function');
    });
    it('should have a deck', function (){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.equal(deck);
    });
    it('should have 0 turns as default', function (){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.turns).to.equal(0);
    });
    it('should return current card', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.equal(card1);
    });
    it('should start with no incorrect guesses', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.incorrectGuesses).to.deep.equal([]);
    })
    it('should be able to take a turn', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.turns).to.equal(0);
        expect(round.takeTurn('sea otter')).to.equal('correct!');
        expect(round.takeTurn('spleen')).to.equal('incorrect!');
        expect(round.turns).to.equal(2);
        expect(round.incorrectGuesses).to.deep.equal([14]);
        expect(round.returnCurrentCard()).to.equal(card3);
    })
    it('should be able to calculate percentage of correct answers', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.turns).to.equal(0);
        expect(round.takeTurn('sea otter')).to.equal('correct!');
        expect(round.takeTurn('spleen')).to.equal('incorrect!');
        expect(round.calculatePercentCorrect()).to.equal(50);
    })
});