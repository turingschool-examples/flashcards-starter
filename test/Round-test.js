const chai = require('chai');
const expect = chai.expect;

// const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  it.skip('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(deck.deck[0])
  })

  it.skip('should instatiate a new Turn when guess is made', function() {
    const round = new Round('guess')

    expect(round.takeTurn()).to.be.an.instanceof(Turn)
  })

  it.skip('amount of turns should update', function() {
    var round = new Round(deck);

    round.takeTurn()
    round.takeTurn()
    round.takeTurn()

    expect(round.turns).to.equal(1)
    expect(round.turns).to.equal(2)
    expect(round.turns).to.equal(3)
  })

  it.skip('incorrectGuess array should increase for each incorrect guess', function() {
    const round2 = new Round('sea otter');

    round2.takeTurn();
    expect(round.incorrectGuesses.length).to.equal(1);

    const round = new Round('guess');

    round.takeTurn();
    expect(round.incorrectGuesses.length).to.equal(0);
  })

  it.skip('correct feedback displays', function() {
    const round = new Round('sea otter');

    round.takeTurn();
    expect(round.turn.giveFeedback()).to.be.equal('corret!')

    const round2 = new Round('guess');

    round2.takeTurn();
    expect(round2.turn.giveFeedback()).to.be.equal('incorret!')
  })

  it.skip('should evaluate correct percent of answers', function() {
    const round = new Round('sea otter', currentCard);
    round.incorrectGuesses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    expect(round.calculatePercentCcorrect()).to.be.equal('50%')

    const round = new Round('sea otter', currentCard);
    round.incorrectGuesses = [1,2,3];

    expect(round.calculatePercentCcorrect()).to.be.equal('90%')
  })

  it.skip('when the round ends console should display correct message', function() {
    const round = new Round('sea otter', currentCard);
    round.incorrectGuesses = [1,2,3];

    expect(round.endRound()).to.be.equal('** Round over! ** You answered 90% of the questions correctly!')
  })

})
