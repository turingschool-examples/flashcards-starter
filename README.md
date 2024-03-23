# FlashCards Gwyneth Patrick, Turing FE 2401.

## Setup

Clone or fork and clone this repo to your personal machine.

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

Running `node index.js` from the root of this repository should result in the following message being displayed in your terminal: 

```bash
Your project is running...
Welcome to FlashCards! You are playing with 30 cards.
```
Followed by the 1st question from the deck.

## Interacting with the program.

To answer the question use your up and down arrow keys to navigate the multiple choice answers, you may also type the integer associated with the answer you'd like to select. In either case, upon selecting your answer, submit with the return/enter key. You should recieve feedback on this answer and the next card will be drawn, repeating this interaction until the deck is out of cards. You will then get a message reporting a score in the form of a percentage. 


![flash cards example image](https://i.imgur.com/H0dQGla.png) 

---

## Note on Test Files
The test files are depricated and will not work in the current version of the main branch as of writing this. They did at one point pass and work as expected, and these can be observed functioning by pulling from the branch "feature/deck-and-round". The tests were originally written with the idea objects would be cloned and the clones returned when finished, though this caused problems with the action based approach of interacting with objects in the pre-existing utils.js file; it was decided this approach should take priority.

## Running Tests

Run your test suite using the command:

```bash
npm test
```
Tests are skipped by default in the main branch, but left unskipped in the afformentioned branch since checking out that branch mostly exists to verify previous versions as passing.
