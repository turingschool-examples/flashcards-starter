const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  it('can count the cards', function(){
    const card1 = new Card(1, "What is Craig's dog actually named?", ['Sugarbear', 'Frumpleface', 'Archer', 'All of the above'], 'All of the above');
    const card2 = new Card(2, 'Activity in which brain region is associated with greater happiness?', ['hypothalamus', 'amygdala', 'ventromedial PFC'], 'ventromedial PFC');
    const card3 = new Card(3, 'Which catecholamine is associated with a perception of challenge rather than threat during a stress response?', ['adrenaline', 'cortisol', 'norepinephrine'], 'norepinephrine');
    const deck = new Deck ([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});