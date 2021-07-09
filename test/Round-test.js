const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

    it('should be a function', () => {
      expect(Round).to.be.a('function');
    });

    it('should instantiate a new Round', () => {
      expect(round).to.be.an.instanceof(Round);
    });
