const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should know what the current card is', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    //Execution
    //Assertion
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it('should start with a turn count of zero', function() {
    //Setup
    //Execution
    //Assertion
  })

  it('should update the turn count after each turn', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    // const turn = new Turn('sea otter', card1);
    //Execution
    round.takeTurn('sea otter');
    //Assertion
    expect(round.turns).to.equal(1);
  });

  it('should start with an no incorrect guesses', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    //Execution
    //Assertion
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should give positive feed back if user guess is correct', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    //Execution
    // round.takeTurn('sea otter');
    //could also make variable for expect
    //Assertion
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
  });

  it('should give negative feedback if user guess is incorrect and store the incorrect card id', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    //Execution
    //Assertion
    expect(round.takeTurn('gallbladder')).to.equal('Incorrect');
    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it('should calculate the percent of correct guesses.', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    //Execution
    round.takeTurn('sea otter');
    round.takeTurn('sea otter');
    //Assertion
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should notify the user to the end of the game and display the percent correct', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    //Execution
    round.takeTurn('sea otter');
    round.takeTurn('sea otter');
    //Assertion
    expect(round.endRound()).to.equal(`** Round Over! ** You answered 50% of the questions correctly!`);
  });
});
