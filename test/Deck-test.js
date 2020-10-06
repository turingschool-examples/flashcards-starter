const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
let card1;
let card2;
let card3;
let deck;

beforeEach(function() {
  card1 = new Card(1, 'Who\'s Harry Potter\'s godfather?', ['Dumbledore', 'Sirius', 'Malfoy'], 'Sirius');

  card2 = new Card(2, 'What position in Quidditch does Harry Play?', ['seeker', 'beater', 'chaser'], 'seeker');

  card3 = new Card(3, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Dumbledore', 'Fudge'], 'Dumbledore');

  deck = new Deck([card1, card2, card3]);
})

});
