const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function(){
  it('should be an instance of Round', function(){
    const round1 = new Round();
    expect(round1).to.be.an.instanceOf(Round);
  });

  it('should start with a deck of cards', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    expect(deck1).to.equal(deck1);
  });

  it('should return the first card being played at the beginning of the round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    round1.returnCurrentCard();
    expect(round1.returnCurrentCard()).to.equal(round1.deck.cardsInDeck[0]);
  });

  it('should count how many turns have been taken', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    round1.takeTurn('spleen');

    expect(round1.turns).to.equal(2);
  });

  it('should store the id\s of incorrect guesses', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    expect(round1.incorrectGuesses).to.deep.equal([1]);
  });


  it('should give feedback if a player\s guess is incorrect', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('pug');
    expect(round1.takeTurn('pug')).to.equal('Incorrect!');
  });

  it('should give feedback if a player\s guess is correct', function(){
    // this works when cardInPlay.hasBeenPlayed is NOT reassigned to true; (commenting out lines 25 and 29)
    // I've tried: moving the reassignment of cardInPlay.hasBeenPlayed;
    // console.logging deck1 (before and after takeTurn method) -- it seems the correct card is being played?
    // Possible error: order of operations (When reassignment is happening?)
    // possible error: Testing the outcome incorrectly
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('sea otter');
    expect(round1.takeTurn('sea otter')).to.equal('Correct!');
  });

  it('should go to the next card after a turn is completed', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);

    round1.takeTurn('sea otter');
    round1.returnCurrentCard();

    expect(round1.returnCurrentCard()).to.equal(card2);

  });
});
