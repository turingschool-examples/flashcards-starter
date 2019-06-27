const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return current card', function(){
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    
    expect(round.returnCurrentCard()).to.equal(card1);
  });

    it('should increment turns ', function(){
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck)

      expect(round.turns).to.equal(0);
      round.takeTurn('function');
      expect(round.turns).to.equal(1);

    });

    it('should store ids of incorrect guesses', function(){
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck)


      round.takeTurn('array');
      expect(round.incorrectGuess.length).to.equal(1);
      expect(round.incorrectGuess[0]).to.equal(1);
    
    });


    it('should calculate and return the percentage of correct guesses', function() {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck)

      round.takeTurn('object')
      round.takeTurn('spleen')

      expect(round.calculatePercentCorrect()).to.equal('50%');
    });

    it('should print a summary of correct guesses', function() {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck)

      
      round.takeTurn('object');
      round.takeTurn('spleen');
      round.takeTurn('Lex');

      expect(round.endRound()).to.equal('** This round is over! ** You answered 33% of the questions correctly!')
    })

  });
