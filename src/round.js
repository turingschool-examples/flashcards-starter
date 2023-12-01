function createRound(deck, card, turns, incorrectGuesses) {
    var round = {
    deck: deck || [],
    card: card,
    turns: turns || 0,
    incorrectGuesses: incorrectGuesses || []
    }
    return round
}

function takeTurn(round) {
    round.turns++;
    const currentCard = round.currentCard;
    
// if the user guess = correct answer the guess is correct
//  else the guess is incorrect .. add the card to incorrect guesses
// give user feedback 

    round.incorrectGuesses.push(currentCard);

    const nextCardIndex = deck.indexOf(currentCard) + 1;
    round.currentCard = nextCardIndex < deck.length ? deck[nextCardIndex] : null;
}