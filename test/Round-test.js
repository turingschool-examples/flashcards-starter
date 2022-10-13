const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
   it('should be a class', function() {
   const round = new Round();
   expect(round).to.be.instanceOf(Round) 
    });

    it('should take in an array of card objects',function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.deep.equal(deck)
    })
    
    it ("should have turn defaulted to 0 at game start", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.turn).to.equal(0);
    })

    it('should have a place to store incorrect guesses', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
    });

    it("should return current card object",function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal(deck[0])
    });
    
    it("should be able to take a turn ", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        round.takeTurn(currentTurn)
        expect(round.turn).to.equal(1)
    })

    it ("should demonstrate turn increments", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        round.takeTurn(currentTurn)
        round.takeTurn(currentTurn)
        expect(round.turn).to.equal(2)
    });

    it("should be able to evaluate if guess is incorrect", function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        expect(round.takeTurn(currentTurn)).to.equal('Incorrect!');
    });
    
    it("should take correct guess and add not add to incorrectGuesses array", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('sea otter',card1);
        round.takeTurn(currentTurn);
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it("should take incorrect guess and add them to incorrectGuesses array", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        round.takeTurn(currentTurn);
        expect(round.incorrectGuesses).to.deep.equal([1])
    })

    it("should be able to shuffle deck ",function(){ 
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        round.takeTurn(currentTurn);
        expect(round.deck.cards[2]).to.equal(card1)
    })

    it("Should remove the current card from the top of the deck", function () {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const currentTurn = new Turn('pug',card1);
        round.takeTurn(currentTurn);
        
       expect(round.deck.cards[0]).to.equal(card2);
     })

     it('should be able to calculate percent of correct guesses', function() {
         const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
         const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
         const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
         const deck = new Deck([card1, card2, card3]);
         const round = new Round(deck);
         const currentTurn = new Turn('pug', card1);
         const currentTurn2 = new Turn('gallbladder', card2)
         const currentTurn3 = new Turn('watching Netflix', card3)
        round.takeTurn(currentTurn);
        round.takeTurn(currentTurn2);
        round.takeTurn(currentTurn3);
        expect(round.calculatePercentCorrect()).to.equal(33)
     })

     it("should be able to end a round",function() {
         const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
         const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
         const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
         const deck = new Deck([card1, card2, card3]);
         const round = new Round(deck);
         const currentTurn = new Turn('pug', card1);
         const currentTurn2 = new Turn('gallbladder', card2)
         const currentTurn3 = new Turn('watching Netflix', card3)
         round.takeTurn(currentTurn);
         round.takeTurn(currentTurn2);
         round.takeTurn(currentTurn3);
         round.calculatePercentCorrect();
         expect(round.endRound(round.calculatePercentCorrect())).to.equal('** Round Over! You answered 33 % of the questions correctly!')
     })

});