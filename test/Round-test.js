const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

function getDefaultCards() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', 
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
    ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

  return [card1, card2, card3];
}


describe('Round', function() {
  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a deck of cards', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const [card1] = getDefaultCards();
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should update the turns count when a turn is played', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck)
    round.takeTurn("sea otter");

    expect(round.turns).to.equal(1);
  });

  it('should have the next card become the current card when a turn is made', 
    function() {
      const deck = new Deck(getDefaultCards());
      const round = new Round(deck)
      round.takeTurn("sea otter");

      expect(round.deck.deckCards[round.turns])
        .to.deep.equal(round.deck.deckCards[1]);
    });

  it('should evaluate the player/s guess', function() {
    const [card1] = getDefaultCards();
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck)
    const turn = new Turn("sea otter", card1);
    round.takeTurn("sea otter"); 

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should store incorrect guesses by their id', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck)
    round.takeTurn("sea otter");
    round.takeTurn("spleen"); 

    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should give feedback to the player about their guess', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck)
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix"); 
    const badAnswer = round.takeTurn("incorrect answer");

    expect(badAnswer).to.equal("Incorrect!");
  });

  it('should calculate the percent correct', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck);
    round.takeTurn("sea otter");
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix");

    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should return a new round instance', function() {
    const deck = new Deck(getDefaultCards());
    const round = new Round(deck);

    expect(round.endRound()).to.be.an.instanceOf(Round);
  });

  it('resets turns to zero', function() {
    const deck = new Deck(getDefaultCards());
    const mockRound = new Round(deck)
    mockRound.takeTurn("capybara");
    mockRound.takeTurn("spleen"); 
    mockRound.takeTurn("bubble wrap");
    const round = mockRound.endRound();

    expect(round.turns).to.equal(0);
  });

  it('creates a new round from incorrect guesses', function() {
    const deck = new Deck(getDefaultCards());
    const mockRound = new Round(deck)
    mockRound.takeTurn("first incorrect guess");
    mockRound.takeTurn("second incorrect guess"); 
    mockRound.takeTurn("third incorrect guess");
    const round = mockRound.endRound();

    expect(round.deck.deckCards.length).to.equal(3);
  });
}); 