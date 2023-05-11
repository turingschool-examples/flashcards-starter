const { createCard } = require('../src/card');

const card1 = createCard(
  1,
  'What is the capitol of Washington State?',
  ['Toronto', 'Seattle', 'Olympia'],
  'Olympia'
);

const card2 = createCard(
  2,
  'What is the capitol of Oregon State?',
  ['Salem', 'Portland', 'Beaverton'],
  'Salem'
);

const card3 = createCard(
  3,
  'What is the capitol of Idaho State?',
  ['Courdelane', 'Boise', 'McCall'],
  'Boise'
);

const deck = [card1, card2, card3]

module.exports = {
  card1,
  card2,
  card3,
  deck
}