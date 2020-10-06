const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
let card1;
let card2;
let card3;
let deck1;

beforeEach(function() {
  card1 = new Card(1, 'Who\'s Harry Potter\'s godfather?', ['Dumbledore', 'Sirius', 'Malfoy'], 'Sirius');

  card2 = new Card(2, 'What position in Quidditch does Harry Play?', ['seeker', 'beater', 'chaser'], 'seeker');

  card3 = new Card(3, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Dumbledore', 'Fudge'], 'Dumbledore');

  deck1 = new Deck([card1, card2, card3]);
});

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should be able to hold cards', function() {
    const card4 = new Card(4, 'What\'s the town outside of Hogwarts?', ['Diagon Alley', 'Privet Drive', 'Hogsmeade'], 'Hogsmeade');
    const card5 = new Card(5, 'Who told Harry he was a wizard?', ['Hagrid', 'Dudley', 'Ron'], 'Hagrid');
    const deck2 = new Deck([card4, card5]);

    expect(deck1.cards).to.deep.equal([card1, card2, card3]);
    expect(deck2.cards).to.deep.equal([card4, card5]);
  })

});
