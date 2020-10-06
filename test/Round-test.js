const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let deck1;
  let deck2;
  let round1;

  beforeEach(function () {
    card1 = new Card(1, 'Who\'s Harry Potter\'s godfather?', ['Dumbledore', 'Sirius', 'Malfoy'], 'Sirius');

    card2 = new Card(2, 'What position in Quidditch does Harry Play?', ['seeker', 'beater', 'chaser'], 'seeker');

    card3 = new Card(3, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Dumbledore', 'Fudge'], 'Dumbledore');

    card5 = new Card(5, 'Who told Harry he was a wizard?', ['Hagrid', 'Dudley', 'Snape'], 'Hagrid');

    card4 = new Card(4, 'What\'s the town outside of Hogwarts?', ['Diagon Alley', 'Privet Drive', 'Hogsmeade'], 'Hogsmeade');

    deck1 = new Deck([card1, card2, card3]);

    deck2 = new Deck([card4, card5]);

    round1 = new Round(deck1);

    round2 = new Round(deck2);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round1).to.be.an.instanceof(Round);
  });

  it('should be able to have a deck', function() {
    expect(round1.deck).to.equal(deck1);
    expect(round2.deck).to.equal(deck2);
  });

});
