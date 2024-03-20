const chai = require('chai');
const expect = chai.expect;

const { createCard,evaluateGuess,createDeck,createRound,takeTurns,calculatePercentCorrect} = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function')
  });
  it('should be able to evaluate if a guess is correct',function(){
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = evaluateGuess ('object',card)
  expect(turn).to.equal('correct')
})

it('should be able to evaluate if a guess is incorrect',function(){
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = evaluateGuess ('array',card);
  expect(turn).to.equal('incorrect')
})
})

describe('deck', function() {

  it('should be a function',function(){
    expect(createDeck).to.be.a('function')
  });

  it('should have multiple cards', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    expect(deck).to.deep.equal([card1,card2,card3]);
  })
  it('should be able to have multiple cards2',function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = createCard(4,'what is davids fave instrument',['guitar','bass','drums'],'guitar');
    const deck = createDeck([card1, card2, card3,card4]);
    expect(deck).to.deep.equal([card1,card2,card3,card4]);
  })
})


describe('round', function(){
  it('should be a function',function(){
    expect(createRound).to.be.a('function')
  });
  it('should create a round and its properties', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck(card1, card2, card3);

    const round = createRound(deck);
    
    expect(round.deck).to.deep.equal(deck);
    expect(round.turns).to.equal(0);
    expect(round.currentCard).to.equal(deck[0])
    expect(round.incorrectGuesses).to.deep.equal([])
  })
})

describe('take turns',function(){
  let round;
  beforeEach(() => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  })

  it('should be a function',function(){
    expect(takeTurns).to.be.a('function')
  });
  it('should update the turn count when a guess is made',function(){   
    takeTurns('sea otter', round);
    expect(round.turns).to.equal(1);
    takeTurns('appendix', round);
    expect(round.turns).to.equal(2);
  })
  it('should have next card become current card', function(){
    takeTurns('gallbladder', round);
    expect(round.currentCard.id).to.equal(2)
  })

it('should have next card become current card after each guess',function(){
    takeTurns('sea otter', round);
    expect(round.currentCard.id).to.equal(2)
    takeTurns('appendix', round);
    expect(round.currentCard.id).to.equal(3)
})

it('should update entire card after guess',function(){
  takeTurns('sea otter', round);
  expect(round.currentCard).to.equal(round.deck[1])
})

it('should evaluate if a guess is wrong and store it in an array',function(){
  takeTurns('turing', round);
  expect(round.incorrectGuesses).to.deep.equal([round.deck[0].id]);

})
it('should calculate percentage of correct guesses', function() {
  takeTurns('sea otter', round); 
  takeTurns('appendix', round);
  takeTurns('playing with bubble wrap', round); 
  expect(calculatePercentCorrect(round)).to.equal(67);
});


})


  






//   it('should print correct message when ending round', function() {
//     takeTurns('sea otter', round); // Correct guess
//     takeTurns('appendix', round); // Incorrect guess
//     takeTurns('playing with bubble wrap', round); // Correct guess
//     const consoleSpy = chai.spy.on(console, 'log');
//     endRound(round);
//     expect(consoleSpy).to.have.been.called.with('** Round over! ** You answered 66.67% of the questions correctly!');
//   });
// });


