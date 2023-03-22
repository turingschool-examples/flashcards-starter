const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be able to store the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should have a takeTurn function', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    round.takeTurn(turn);

    expect(round.takeTurn).to.be.a('function');
  });

  it('should increment turns after each guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    round.takeTurn(turn);

    expect(round.turns).to.equal(1);
  });

  it('should update the current card after each guess', function()  {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    round.takeTurn(turn);

    expect(round.currentCard).to.deep.equal(card2);
  });

  it('should be able to store incorrect guesses and their IDs', function()  {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('crab', card1);

    round.takeTurn(turn);

    expect(round.incorrectGuesses).to.deep.equal(['1: crab']);
  });

it('should be able to calculate percent correct', function()  {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
 
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  const turn1 = new Turn('capybara', card1);
  const turn2 = new Turn ('giant african snail', card1);
  const turn3 = new Turn ('sea slug', card1);
  const turn4 = new Turn('sea otter', card1);

  round.takeTurn(turn1);
  round.takeTurn(turn2);
  round.takeTurn(turn3);
  round.takeTurn(turn4);

  expect(round.percentCorrect).to.equal('25.00%');
});

it('should be able to end a round', function()  {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
 
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  const turn1 = new Turn('capybara', card1);
  const turn2 = new Turn ('giant african snail', card1);
  const turn3 = new Turn ('sea slug', card1);
  const turn4 = new Turn('sea otter', card1);

  round.takeTurn(turn1);
  round.takeTurn(turn2);
  round.takeTurn(turn3);
  round.takeTurn(turn4);

  round.endRound();

  expect(round.endRound).to.be.a('function');
});
});