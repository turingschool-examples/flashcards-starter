const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

    it('should be an instance of a Round', function() {
      const round = new Round();
      expect(round).to.be.an.instanceof(Round);
  });

    it('should be able to accept a deck', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['seotter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
    
      expect(round.deck.cards).to.eql([card1, card2, card3]);
  });

    it('should count turns starting at 0', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const turns = round.turns;
      expect(turns).to.eql(0);
    });

    it('should return the current card being played', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      const currentCard = round.returnCurrentCard();
      expect(currentCard).to.eql(deck.cards[0]);
  });


      it('should be able to increment turns', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);


        expect(round.turns).to.equal(0);
        round.takeTurn('sea otter');
        expect(round.turns).to.equal(1);
      });

      it('should be able to store incorrect guesses', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        const incorrectGuesses = round.incorrectGuesses;
        expect(incorrectGuesses).to.eql([]);
        round.takeTurn('pug');
        expect(incorrectGuesses).to.eql([1]);
        round.takeTurn('spleen');
        expect(round.incorrectGuesses).to.eql([1, 14]);
      });

      it('returns feedback if the guess is incorrect', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        
        const takeTurn = round.takeTurn('playing with bubble wrap');
        expect(takeTurn).to.eql('Try again.');
      });

      it('returns feedback if the guess is correct', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        
        const takeTurn = round.takeTurn('sea otter');
        expect(takeTurn).to.eql('Great Job! You\'re a rockstar!')
      });

      it('calculates and returns the percentage of correct guesses', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn('watching Netflix');
        const calPercentCorrect = round.calculatePercentCorrect();
        expect(calPercentCorrect).to.eql(0);
        round.takeTurn('gallbladder');
        expect(round.calculatePercentCorrect()).to.eql(50);
      });

      it('should tell the player the round is over and their percentage of correct plays', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn('sea otter');
        round.takeTurn('gallbladder');
        round.takeTurn('playing with bubble wrap');

        expect(round.incorrectGuesses).to.eql([]);
        expect(round.endRound(100)).to.equal( "** Round over! ** You answered 100% of the questions correctly!"); 
      });
});