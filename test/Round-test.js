const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck)

  it('Should return the Deck of Cards', function () {

    expect(round.deck.deckOfCards).to.deep.equal([card1, card2, card3])
  
  });

  it('Should return the first Card in the Deck', function () {
    
    const round = new Round(deck)
    
    let currentCard = round.returnCurrentCard()

    expect(currentCard).to.deep.equal(card1)

  });

  it('Should keep track of turns', function () {
    
    const round = new Round(deck)
    
    round.takeTurn("pug")
    round.takeTurn("pug")

    expect(round.turns).to.equal(2)
   
  });

  it('Should have a new current Card', function () {
    
    const round = new Round(deck)
    
    round.takeTurn("pug")
    
    expect(round.returnCurrentCard()).to.equal(card2)

  });

  it('Should store the id of the card when the guess doesnt match', function () {

    const round = new Round(deck)

    round.takeTurn("pam")

    expect(round.incorrectGuesses).to.deep.equal([card1.id])
  });

  it('Should return feedback if guess is correct or incorrect', function () {

    const round = new Round(deck)

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('gallbladder')).to.equal("You got it!")

  });

  it('Should calculate % of correct guesses', function () {

    const round = new Round(deck)

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('gallbladder')).to.equal("You got it!")

    expect(round.takeTurn('Fitzgerald')).to.equal("You got it!")

    expect(round.calculatePercentCorrect()).to.deep.equal('0.67%')

  });

  it('Should end the round with letting you know your guess %', function () {

    const round = new Round(deck)

    expect(round.takeTurn('pam')).to.equal("incorrect!")

    expect(round.takeTurn('gallbladder')).to.equal("You got it!")

    expect(round.takeTurn('will')).to.equal("incorrect!")

    let percent = round.calculatePercentCorrect()
    expect(percent).to.deep.equal('0.33%')

    expect(round.endRound(percent)).to.deep.equal("**Round over!** You answered 0.33% of the questions correctly!")

  });
});