const chai = require('chai');
const expect = chai.expect;

const {
    createCard,
    createDeck, 
} = require('../src/card');

const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
} = require('../src/round');

describe('round', function () {
  let card1, card2, card3, deck, round
  beforeEach(function() {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
      );
      card2 = createCard(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
      );
      card3 = createCard(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
      );
  
      deck = createDeck([card1, card2, card3]);
      round = createRound(deck, card1, 0, []);
  })
  it('should be an object that organizes guesses and records if they are correct or incorrect', function () {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.deep.equal({
    id: 1,
    question: "What is Robbie's favorite animal",
    answers: ['sea otter', 'pug', 'capybara'],
    correctAnswer: 'sea otter'
    });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should be able to take turns', function() {
    expect(takeTurn('sea otter', round)).to.equal('correct!');
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.currentCard).to.equal(card2);
    

    expect(takeTurn('spleen', round)).to.equal('incorrect!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.currentCard).to.equal(card3);
  });

  it('should calculatePercentCorrect', function() {
    takeTurn('sea otter', round)
    takeTurn('spleen', round)
    
    expect(calculatePercentCorrect(round)).to.equal(50)
  });  

  it('should end the round', function() {
    takeTurn('sea otter', round)
    takeTurn('spleen', round)

    const percentageCorrect = calculatePercentCorrect(round)
    
    expect(endRound(round)).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });  
});