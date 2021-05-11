const chai = require('chai');
const expect = chai.expect;

// const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round

describe('Round', function() {

    it('should be a function', function() {
      
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  }); 

// Your Round class should meet the following requirements:

// returnCurrentCard: method that returns the current card being played

  it('should return current card being played', function() {
    
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.currentCard).to.equal(card1);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

//////

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

  it('should start at 0 turns', function() {
    
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  ///

  it('should start with no incorrect guesses', function() {
    
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  // The turns count is updated, regardless of whether the guess is correct or incorrect

  it('should update turn count', function() {
    
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    const turn = new Turn("guess", "card")

    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.turns).to.deep.equal(2);
  });

  // When a guess is made, a new Turn instance is created.

  // it.skip('should create Turn instance if guess made', function() {
        
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  //   const deck = new Deck([card1, card2, card3]);

  //   const round = new Round(deck);

  //   round.takeTurn('guess1')

  //   expect(turn).to.be.an.instanceof(Turn);
  // });

  // The next card becomes current card

  it('should make next card become current card', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('guess1')
    round.takeTurn('guess2')

    // expect(round.currentCard).to.equal({
    //   id: 12,
    //   question: 'What is Travis\'s favorite stress reliever?',
    //   answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
    //   correctAnswer: 'playing with bubble wrap'
    // });

    expect(round.returnCurrentCard()).to.deep.equal(card3);
    // console.log(round.deck.cards)
  });

  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

  it('should store incorrect guesses', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('guess1')
    round.takeTurn('guess2')

    expect(round.incorrectGuesses).to.deep.equal(['guess1', 'guess2']);
  });

  // Feedback is returned regarding whether the guess is incorrect or correct

  it('should provide feedback whether correct/incorrect', function() {
    
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.deep.equal('incorrect!');
  });

////////

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

  it('should provide percent of correct guesses', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.incorrectGuesses = ["wrong1", "wrong2", "wrong3"];

    round.turns = 10;

    expect(round.calculatePercentCorrect()).to.equal(70);

  });

// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

  it('should notify when round over', function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.incorrectGuesses = ["wrong1", "wrong2", "wrong3"];

    round.turns = 10;

    expect(round.endRound()).to.equal('** Round over! ** You answered 70% of the questions correctly!');

  });
})