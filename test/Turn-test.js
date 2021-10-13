const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it('should be a function',function(){
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  });

  it('should be an instance of the Turn class', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return user guess', function() {
    const sampleCard = new Card(1, 'In which city was Pluto discovered?', ['Chicago', 'Tucson', 'Flagstaff'], 'Flagstaff')
    const turn = new Turn('Flagstaff', sampleCard)
    expect(turn.userGuess).to.equal(sampleCard.correctAnswer);
  })

  it('should be able to return a card', function(){
    const sampleCard = new Card(1, 'In which city was Pluto discovered?', ['Chicago', 'Tucson', 'Flagstaff'], 'Flagstaff');
    const turn = new Turn('Flagstaff', sampleCard);
    expect(turn.currentCard).to.equal(sampleCard);
  })

  it('should be able to evaluate a guess', function(){
    const sampleCard = new Card(1, 'In which city was Pluto discovered?', ['Chicago', 'Tucson', 'Flagstaff'], 'Flagstaff')
    const turn = new Turn('Flagstaff', sampleCard)
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should be able to give feedback for a correct or incorrect answer', function(){
    const sampleCard = new Card(1, 'In which city was Pluto discovered?', ['Chicago', 'Tucson', 'Flagstaff'], 'Flagstaff')
    const turn = new Turn('Flagstaff', sampleCard)
    expect(turn.giveFeedback()).to.equal("Correct!");
  })
});