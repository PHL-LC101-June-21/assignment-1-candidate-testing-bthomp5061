const quiz = require('./candidate-testing');


 // TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer /
const input = require('readline-sync');
let question = " Who was the first American woman in space? ";
let questions = ["Candidate Name:  ", "True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 = ?","Given the array [8, Orbit, Trajectory, 45]what entry is at index 2?","Who was the first American woman in space? ","What is the minimum crew size for the International Space Station(ISS)?"];

let correctAnswer = " Sally Ride ";
let candidateAnswer = "" ;
let candidateAnswers = [];
let correctAnswers = ["Can Twin","True","40","tajectory","sally ride","3"];
let response = [];
let consoleTest = "";

quiz.runProgram();
// TODO 1.1b: Ask for candidate's name

function askForName() {
	candidateName = input.question("What is your name?");
	return console.log(`Hello, ${candidateName}.`);
}

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		candidateAnswers[i] = input.question(`${questions[i]}
Your Answer: `);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
	}
	return;
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

function gradeQuiz(candidateAnswers) {
let correctAnswers = 0;
let score= correctAnswers / questions.length;
console.log("CAN TWIN");
console.log("Correct Answers-" + score);
console.log(score * 100 + "% on test");
if ([score * 100] > [8 * 100])
console.log("PASS!");
else if ([score * 100] < [8 * 100])
console.log("FAIL!");

function runProgram() {
 // TODO 1.1c: Ask for candidate's name //
console.log(" Hello, " +  candidateName + "!");
 askForName();
 askQuestion();
 gradeQuiz(candidateAnswers);
}


gradeQuiz(this.candidateAnswers);



// Don't write any code below this line //
// And don't change these or your program will not run as expected 

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};