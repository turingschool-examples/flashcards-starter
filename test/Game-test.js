const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Round', function() {
  var firstCard
  var secondCard
  var thirdCard
  var deck
  var round

  beforeEach(function () {
  firstCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  secondCard = new Card(8, 'Which array prototype is not an accessor method?', ["join()", "slice()", "splice()"], "splice()" )
  thirdCard = new Card(11,'Which iteration method returns a new array with all elements that match a given condition?', ["filter()", "find()", "map()"], "filter()") 
  deck = new Deck([firstCard, secondCard, thirdCard])
  round = new Round(deck)
})
})