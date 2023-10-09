# FlashCards Starter Kit

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have skipped tests in your `card` test file show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run this file until you are running your `game` file in Iteration 3. Prior to that, you should strive to use TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

**Create all of your feature code files in the `src` directory.** Use the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to run the `node index.js` command in your terminal to run the game.

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `card-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```
# FlashCards Starter Kit

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have skipped tests in your `card` test file show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to run this file until you are running your `game` file in Iteration 3. Prior to that, you should strive to use TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

**Create all of your feature code files in the `src` directory.** Use the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to run the `node index.js` command in your terminal to run the game.

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `card-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```
# Flashcards

### Abstract:
This application allows a user to play a flashcard-type quiz game in their command line interface. They will be able to see and answer questions, submit guesses, and view their score at the end of the round.

### Preview of App:
![gif]()

### Learning Goals:
This project was created on a MacBook Pro using GitHub, VS Code, Google Chrome, and the Mac Terminal.

### Installation Instructions:
1. To get this app running, clone it down from GitHub under the "<> Code" dropdown. 
2. Open it from your terminal or preferred CLI with `git clone <HTTPS or SSH key>`. 
3. Move (`cd`) into the directory. 
4. Open the file in your code editor of choice, and you'll have everything you need! 
5. The app can be viewed and interacted with in your browser of choice by using `open index.html` in your terminal.
