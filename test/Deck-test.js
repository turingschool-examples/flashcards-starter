const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  beforeEach(function() {
    const card1 = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
    const card2 = new Card(2, 'Where did Sherlock Holmes confront Professor Moriarty?',['Victoria Falls', 'Niagra Falls', 'Bushkill Falls'],'Reichenbach Falls');
    const card3 = new Card(3, 'What was the profession of G.K. Chestertons famous detective?',['Police Officer', 'Socialite', 'University Professor'],'Catholic Priest');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });
  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });
  it('should store all cards required in the game', function() {
    expect(deck.allCards).to.deep.equal([
      {
      'id': 1,
      'question': 'What author invented the detective story?',
      'answers': ['Dickens', 'Doyle', 'Gaboriau'],
      'correctAnswer': 'Poe'
    }, {
      'id': 2,
      'question': 'Where did Sherlock Holmes confront Professor Moriarty?',
      'answers': ['Victoria Falls', 'Niagra Falls', 'Bushkill Falls'],
      'correctAnswer': 'Reichenbach Falls'
    }, {
      'id': 3,
      'question': 'What was the profession of G.K. Chestertons famous detective?',
      'answers': ['Police Officer', 'Socialite', 'University Professor'],
      'correctAnswer': 'Catholic Priest'
    }]);
  });
  it('should return the length of the card container', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
