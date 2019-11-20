const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  beforeEach( () => {
    var card1 = new Card ({
      "id": 1,
      "question": `A score of one better than par on a golf hole is called what?`,
      "answers": ['birdie', 'bogey', 'eagle'],
      "correctAnswer": 'birdie'
    });
    var card2 = new Card ({
      "id": 2,
      "question": `What is my favorite color?`,
      "answers": ['green', 'blue', 'orange'],
      "correctAnswer": 'green'
    });
    var card3 = new Card ({
      "id": 3,
      "question": `How many toes do I have on my right foot?`,
      "answers": [6, 5, 10],
      "correctAnswer": 5
    });

    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
  });





})
