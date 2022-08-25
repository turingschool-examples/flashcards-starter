const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/turn')
const Round = require('../src/Round')

describe('Round', function(){
  let card
  let card2
  let card3
  let card4
  let deck
  let round
  let turn

  beforeEach(() => {
    card = new Card(1, 'What is the name of Beth\s dog?', ['Doug', 'Fido', 'Buddy', 'Jimmy'], 'Jimmy')
    card2 = new Card(2, 'What is the name of Hunter\s cat?', ['Mittens', 'Tiger', 'Rex', 'Socks' ], 'Rex')
    card3 = new Card(3, 'What is the name of Hazel\s dog?', ['Rocky', 'Rogue', 'Ang', 'Zuko'], 'Rogue')
    card4 = new Card(4, 'What is the name of Lana\s dog?', ['Apollo', 'Moon', 'Pluto', 'Comet'], 'Apollo')
    deck = new Deck([card, card2, card3, card4])
    turn = new Turn('Jimmy', card)
    round = new Round(deck)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
   expect(round).to.be.an.instanceof(Round)
  })

  it('should return the current card being played', function() {
   expect(round.returnCurrentCard()).to.equal(card)
  })

  it('should update the turn count', function(){
    round.takeTurn('Jimmy')
    expect(round.turns).to.equal(1)
    round.takeTurn('Mittens')
    expect(round.turns).to.equal(2)
  })

  it('should evaluate guess and store incorrect guesses', function(){
   let guess1 = round.takeTurn('Jimmy')
   expect(guess1).to.equal('Correct!')
   expect(round.incorrectGuesses.length).to.equal(0)
   let guess2 = round.takeTurn('Mittens')
   expect(guess2).to.equal('Incorrect!')
   expect(round.incorrectGuesses.length).to.equal(1)
 })

 it('should calculate and return the percentage of correct guesses', function(){
   let guess1 = round.takeTurn('Jimmy')
   expect(guess1).to.equal('Correct!')
   expect(round.calculatePercentCorrect()).to.equal(100)
   let guess2 = round.takeTurn('Mittens')
   expect(guess2).to.equal('Incorrect!')
   expect(round.calculatePercentCorrect()).to.equal(50)
 })
 it('should notify user when the round is over', function(){
   round.takeTurn('Jimmy')
   round.takeTurn('Mittens')
   round.takeTurn('Rogue')
   round.takeTurn('Apollo')
   expect(round.endRound()).to.equal('** Round over! ** You answered 75% of the questions correctly!')
 })
})
