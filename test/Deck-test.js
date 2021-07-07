const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

const card1 = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
const card2 = new Card(2, 'What does the callback function for the map() method take in?', ["current element", "initializer", "boolean"], 'current element')
const card3 = new Card(3, 'What does the callback function for reduce() return?', ["the accumulator", "the current element", "the initializer"], 'the accumulator')