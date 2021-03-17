const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count when a turn is played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    round.takeTurn("sea otter", card1);
    expect(round.turns).to.equal(1);
  });

  it('should have the next card become the current card when a turn is made', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    round.takeTurn("sea otter", card1);
    expect(round.deck.deckCards[0]).to.deep.equal(card2);
  });

  it('should evaluate the player/s guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const turn = new Turn("sea otter", card1);
    round.takeTurn("sea otter", card1); 
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should store incorrect guesses by their id', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    round.takeTurn("spleen", card2); 
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should give feedback to the player about their guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const turn = new Turn("watchingNetflix", card3);
    round.takeTurn("watching Netflix", card3); 
    expect(turn.giveFeedback()).to.equal("Incorrect!");
  });

  it('should calculate the percent correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    round.takeTurn("sea otter", card1);
    round.takeTurn("gallbladder", card2);
    round.takeTurn("watching Netflix", card3);

    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should give the player their percent of correct answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    round.takeTurn("sea otter", card1);
    round.takeTurn("gallbladder", card2);
    round.takeTurn("watching Netflix", card3);

    expect(round.endRound()).to.deep.equal(`**Round over!**You answered 67%
     of the questions correctly!`);
  });
}); 