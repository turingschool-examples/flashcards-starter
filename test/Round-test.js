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

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck);

    expect(Round).to.be.a('function');
  })

  it('should be an instance of a Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck);

    expect(round).to.be.an.instanceof(Round);
  });

  //instantiate round default turnCount is zero
  //instantiate round with Deck


  it('should return the current card being played', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)
    // const turn = new Turn('pug', card);

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should make next card the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)

    round.takeTurn('sea otter')

    expect(round.currentCard).to.deep.equal(card2)
  })

  it('should give a message for guessing correctly', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)

    expect(round.takeTurn('sea otter')).to.equal('correct!')

  })

  it('should give a message for guessing incorrectly', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)
    expect(round.takeTurn('pug')).to.equal('incorrect!')
  })

  it('should log incorrect ID', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)

    round.takeTurn('pug')

    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should log end of round message', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const newDeck = new Deck([card1, card2, card3])

    const round = new Round(newDeck)

    round.takeTurn('sea otter')

    expect(round.endRound()).to.equal('**Round over!** You answered (tbd)% of the questions correctly!')
  })
















});
