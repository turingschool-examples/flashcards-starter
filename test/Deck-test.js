const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

let card1, card2, card3, deck;

  beforeEach( () => {
     card1 = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'],'Poe');

     card2 = new Card(2, 'Where did Sherlock Holmes confront Professor Moriarty?',['Victoria Falls', 'Reichenbach Falls', 'Bushkill Falls'],'Reichenbach Falls');

     card3 = new Card(3, 'What was the profession of G.K. Chestertons famous detective?',['Police Officer', 'Socialite', 'Catholic Priest'],'Catholic Priest');

     deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store all cards required in the game', function() {
    expect(deck.cards).to.deep.equal([
      {
      'id': 1,
      'question': 'What author invented the detective story?',
      'answers': ['Poe', 'Doyle', 'Gaboriau'],
      'correctAnswer': 'Poe'
    }, {
      'id': 2,
      'question': 'Where did Sherlock Holmes confront Professor Moriarty?',
      'answers': ['Victoria Falls', 'Reichenbach Falls', 'Bushkill Falls'],
      'correctAnswer': 'Reichenbach Falls'
    }, {
      'id': 3,
      'question': 'What was the profession of G.K. Chestertons famous detective?',
      'answers': ['Police Officer', 'Socialite', 'Catholic Priest'],
      'correctAnswer': 'Catholic Priest'
    }]);
  });
  it('should return the length of the card container', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
