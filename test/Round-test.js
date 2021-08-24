const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  it('should be a function', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  })

  it('should be a instance of Round', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.a.instanceof(Round);
  })

  it('should take have a current card', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1);
  })

  it('should be able to return the current card', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  })

  it('should take a turn and update the turn counter', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("yes");
    expect(round.turns).to.equal(1);
  })

  it('should update current card after a turn', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn("yes");
    expect(round.currentCard).to.equal(card2);
  })


    it('should record the amount of correct answers', function() {
      const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
      const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
      const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn("yes");
      expect(round.correct).to.equal(1);
      round.takeTurn("no");
      expect(round.correct).to.equal(2);
    })

    it('should save the ids of incorrectly answered cards', function() {
      const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
      const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
      const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn('no');
      expect(round.incorrect[0]).to.equal(1);
      round.takeTurn('yes');
      expect(round.incorrect[1]).to.equal(2);
    })

    it('should return feedback when you take a turn', function() {
      const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
      const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
      const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      expect(round.takeTurn('yes')).to.equal('Correct!');
      expect(round.takeTurn('yes')).to.equal('Incorrect!');
    })

    it('should be able to calculate percentage of correct guesses', function() {
      const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
      const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
      const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn('yes');
      round.takeTurn('no');
      round.takeTurn('no');
      expect(round.calculatePercentCorrect()).to.equal(66);
    })

    it('should be able to end the round and print your win percentage', function() {
      const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
      const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
      const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn('yes');
      round.takeTurn('no');
      round.takeTurn('no');
      expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!');
    })
})
