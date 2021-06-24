const quiz = require('./candidate-testing');

const input = require('readline-sync');
 // TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //


let candidateName = "";
let question = "Who was the first American woman in space? ";
let questions = [  "Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswer = "Sally Ride";
let correctAnswers = ["Sally Ride",  "true",  "40",  "Trajectory",  "3"];
let candidateAnswer = "";
let candidateAnswers = [];
let consoleTest = "";


  // TODO 1.1b: Ask for candidate's name //

function askForName() {
	candidateName = input.question("What is your name?")
	return console.log(`Hello, ${candidateName}.`);
}


// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
		candidateAnswers[i] = input.question(`${questions[i]} Your Answer:`);

		console.log(`Correct Answer: ${correctAnswers[i]}`);
	}
	return;
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 


function gradeQuiz(candidateAnswers) {
	let grade = 0;
	for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade++;
		}
  }

candidateAnswer = grade;
grade = grade/5*100;
  console.log(`Overall Grade: ${grade}% (${(grade/100) * 5} of 5 responses correct)`)
  if (grade >= 80) {
    console.log(`Status: PASSED`)
  } else {
    console.log(`FAILED`)
  }
  return grade;
	}
// TODO 1.1c: Ask for candidate's name 
function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers)
}

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