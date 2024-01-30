function createCard(id, question, answers, correctAnswer) {
    var card = {
        id: id, 
        question: question, 
        answers: answers, 
        correctAnswer: correctAnswer
    }
    return card; 
}

function evaluateGuess(guess, card){
    if(guess === card.correctAnswer){
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}

function createDeck(allCards){
    var deck = allCards;  
    return deck; 
 }

 function countCards(deck) {
  var num = deck.map(card => card.id).length;
    return num; 
 }

 function createRound(deck, card, turns){
    let round = {
        deck: deck, 
        card: card, 
        turns: turns || 0, 
        incorrectGuesses: []
    }
    return round; 
 }

 function takeTurns(round){
    round.turns++
    return round; 
 }

 function changeCard(round){
    round.card.id++;
    return round; 
 }

 function incorrectGuess(guess, round){
if(guess === round.card.correctAnswer){
    round.incorrectGuesses.push(round.card.id)
   
}
 return round; 
 }

module.exports = { createCard,
                    evaluateGuess,
                    createDeck,
                    countCards,
                    createRound,
                    takeTurns,
                    changeCard,
                    incorrectGuess
                 }

                