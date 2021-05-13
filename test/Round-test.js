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

  it('should return the current card being played', () => {

        expect(round.returnCurrentCard()).to.deep.equal(card1);

        round.takeTurn('guess');
        
        expect(round.returnCurrentCard()).to.deep.equal(card2);

        round.takeTurn('guess')
        
        expect(round.returnCurrentCard()).to.deep.equal(card3);
        
  });

  it('should update turn count', () => {
        
        round.takeTurn('guess');
        round.takeTurn('guess');
        round.takeTurn('guess');
       
        expect(round.turns).to.be.equal(3);
  });

  // should evaluates guesses, should give feedback, and should store ids of incorrect guesses

  it('should evaluate accurate guesses', () => {
        console.log(round)
        expect(round.takeTurn('sea otter')).to.equal('correct!')
  });

  it.skip('should evaluate inaccurate guesses', () => {

  });

    it.skip('should store the id of the incorrect guess', () => {
        
        expect(round.incorrectGuess['someindex']).to.equal()
    });

    it.skip('should', () => {

    });



//   it('should know how many cards are in the deck ', () => {
//     const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
//     const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
//     const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
//     const deck = new Deck([card1, card2, card3]);
//     const cardCount = deck.countCards();

//     expect(cardCount).to.equal(3);
//   });

//   it('should be able to have decks of different length ', () => {
//     const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
//     const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
//     const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
//     const card4 = new Card(99, 'What is Obama\'s age?', ['59', '65', '48'], '59');
    
//     const deck = new Deck([card1, card2, card3, card4]);
//     const cardCount = deck.countCards();
    
//     expect(cardCount).to.equal(4);
//   });

//   it('should be able to have default deck length ', () => {
//     const deck = new Deck([]);
//     const cardCount = deck.countCards();
    
//     expect(cardCount).to.equal(0);
//   });


});
