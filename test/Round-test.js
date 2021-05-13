const chai = require('chai');
const expect = chai.expect;

    const Card = require('../src/Card');
    const Deck = require('../src/Deck');
    const Round = require('../src/Round');

describe('Round', () => {
  
  let card1, card2, card3, deck, round;
  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should set default current card to the first card in the deck', () => {
      expect(round.currentCard).to.deep.equal(card1);
  })

  it('should start at 0 turns', () => {
      expect(round.turns).to.equal(0);
  });

  it('should start with no incorrect guesses', () => {
      expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should update turn count', () => {
        
    round.takeTurn('guess');
    round.takeTurn('guess');
    round.takeTurn('guess');
   
    expect(round.turns).to.be.equal(3);
  });

  it('should update and return the current card being played', () => {

        expect(round.returnCurrentCard()).to.deep.equal(card1);

        round.takeTurn('guess');
        
        expect(round.returnCurrentCard()).to.deep.equal(card2);

        round.takeTurn('guess')
        
        expect(round.returnCurrentCard()).to.deep.equal(card3);
        
  });

  it('should evaluate accurate guesses', () => {
        expect(round.takeTurn('sea otter')).to.equal('correct!')
  });

  it('should evaluate inaccurate guesses', () => {
        expect(round.takeTurn('foobar')).to.equal('incorrect!')
  });

  it('should store the id of the incorrect guess', () => {
    round.takeTurn('guess');
    round.takeTurn('guess');
    round.takeTurn('guess');
        
    expect(round.incorrectGuesses).to.deep.equal([1,14,12]);
  });

  it('should provide percent of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('guess');
    round.takeTurn('guess');

    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should provide percent of correct guesses with all wrong guesses', () => {
    round.takeTurn('guess');
    round.takeTurn('guess');
    round.takeTurn('guess');

    expect(round.calculatePercentCorrect()).to.equal(0);
  });

  it('should provide percent of correct guesses with all correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');

    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should notify when the round is over', () => {

    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');

    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

  it('should notify when the round is over, even if all guesses are wrong', () => {
    round.takeTurn('hot dog');
    round.takeTurn('elbow');
    round.takeTurn('playing with gummy bears');

    expect(round.endRound()).to.equal('** Round over! ** You answered 0% of the questions correctly!');
  });

  it('should notify when the round is over, even when half the guesses are wrong', () => {
    round.takeTurn('sea otter');
    round.takeTurn('elbow');

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });

});
