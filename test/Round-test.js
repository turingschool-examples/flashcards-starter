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
  it('should be an object that organizes guesses and records if they are correct or incorrect', function () {
    const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
    );
    const card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
    );
    const card3 = createCard(
    12,
    "What is Travis's favorite stress reliever?",
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
    'playing with bubble wrap'
    );

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, card1, 0, []);

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
    const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
    );
    const card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
    );
    const card3 = createCard(
    12,
    "What is Travis's favorite stress reliever?",
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
    'playing with bubble wrap'
    );

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, card1, 0, []);

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
    const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
    );
    const card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
    );
    const card3 = createCard(
    12,
    "What is Travis's favorite stress reliever?",
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
    'playing with bubble wrap'
    );

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, card1, 0, []);

    takeTurn('sea otter', round)
    takeTurn('spleen', round)
    
    expect(calculatePercentCorrect(round)).to.equal(50)
  });  

  it('should end the round', function() {
    const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
    );
    const card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
    );
    const card3 = createCard(
    12,
    "What is Travis's favorite stress reliever?",
    ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
    'playing with bubble wrap'
    );

    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck, card1, 0, []);

    takeTurn('sea otter', round)
    takeTurn('spleen', round)

    const percentageCorrect = calculatePercentCorrect(round)
    
    expect(endRound(round)).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });  
});