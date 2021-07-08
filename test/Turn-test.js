const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', () => {

  let turn, card;

  beforeEach( () => {
    card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
    turn = new Turn('dachshund', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string of the user\'s guess', () => {
    expect(turn.guess).to.equal('dachshund');
  });

  it('should take in a card object for the current card in play', () => {
    expect(turn.card).to.equal(card);
  });

  describe('returnGuess', () => {

    let turn, card;

    beforeEach( () => {
      card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
      turn = new Turn('dachshund', card);
    });

    it('should be a function', () => {
      expect(turn.returnGuess).to.be.a('function');
    });

    it('should return the user\'s guess', () => {
      expect(turn.returnGuess()).to.equal('dachshund');
    });

  });

  describe('returnCard', () => {

    let turn, card;

    beforeEach( () => {
      card = new Card(1, 'What is Mark\'s dog?', ['dachshund', 'beagle', 'husky'], 'dachshund');
      turn = new Turn('dachshund', card);
    });

    it('should be a funtion', () => {
      expect(turn.returnCard).to.be.a('function');
    });

    it('should return an object', () => {
      expect(turn.returnCard()).to.be.an('object');
    });

    it('should have specific properties', () => {
      expect(turn.returnCard().answers).to.deep.equal(['dachshund', 'beagle', 'husky'])
      expect(turn.returnCard().question).to.equal('What is Mark\'s dog?');
      expect(turn.returnCard().correctAnswer).to.equal('dachshund');
    });

  });

  describe('evaluateGuess', () => {

    let turn, card;

    beforeEach( () => {
      card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
      turn = new Turn('dachshund', card);
    });

    it('should be a function', () => {
      expect(turn.evaluateGuess).to.be.a('function');
    });

    it('should return a boolean', () => {
      expect(turn.evaluateGuess()).to.be.a('boolean');
    });

    it('should return true if guess matches the correct answer', () => {
      expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should return false if guess does not match the correct answer', () => {
      turn = new Turn('husky', card);
      expect(turn.evaluateGuess()).to.equal(false);
    });

    });

    describe('giveFeedback', () => {

      let turn, card;

      beforeEach( () => {
        card = new Card(1, "What is Mark's dog", ['dachshund', 'beagle', 'husky'], 'dachshund');
        turn = new Turn('dachshund', card);
      });

      it('should be a function', () => {
        expect(turn.giveFeedback).to.be.a('function');
      });

      it('should return a string', () => {
        expect(turn.giveFeedback()).to.be.a('string');
      });

      it('should return "correct!" if the guess is the right answer', () => {
        expect(turn.giveFeedback()).to.equal('correct!');
      });

      it('should return "incorrect!" if the guess is not the right answer', () => {
        turn = new Turn('husky', card);
        expect(turn.giveFeedback()).to.equal('incorrect!');
      });

    });

});
