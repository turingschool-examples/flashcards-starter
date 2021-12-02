const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const data = require('../src/data');
describe('Round', function() {
  let card1, card2, card3, deck, round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    turn = new Turn(null, card1)

    round = new Round(deck, turn);
  });
  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });
  it('should instantiate a round', function() {
    expect(round).to.be.an.instanceof(Round)
  })
  it('should show current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  })
  it('should keep track of turns', function() {
    expect(round.turnCount).to.deep.equal(0)
  })
  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })
  it('should instantiate turn when guess is made', function() {
    round.takeTurn('mousse')
    expect(round.turn).to.be.an.instanceof(Turn)
  })
  it('should update number of turns', function() {
    round.takeTurn()
    round.takeTurn()
    round.takeTurn()

    expect(round.turnCount).to.equal(3)
  })
  it('should update current card with each turn', function() {
    round.takeTurn()
    round.takeTurn()
    round.takeTurn()

    expect(round.currentCard).to.equal(deck.cards[1])
  })




});

//Creates instance of Turn
//Turns count is updated
//currentCard is updated to next card
//Guess is evaluated
//-Incorrect guesses stored in array with an id
//Feed back for guess is given
