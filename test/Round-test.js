const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function () {
  let card1
  let card2
  let card3
  let deck = new Deck([card1, card2, card3]);

  this.beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card', () => {
    const round = new Round(deck);
    expect(round.returnCurrentCard(deck)).to.deep.equal(card1);
  });

  it('should be able to take a turn', () => {
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('spleen')).to.equal('incorrect!')

    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.returnCurrentCard(deck)).to.deep.equal(card3);
    expect(round.calculatePercentCorrect()).to.equal(50);
    expect(round.endRound()).to.equal("** Round over! ** You answered 50% of the questions correctly!")

  });

});