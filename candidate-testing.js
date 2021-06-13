const input = require('readline-sync');
 
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer /
let question;
let correctAnswer;
let candidateAnswer;

let question1 = " Who was the first American woman in space "?;
let correctAnswer1 = " Sally Ride ";
let candidateAnswer1= "" ;


let questions;
let correctAnswers;
let candidateAnswers;
 
 
function askForName() {
 // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("What is your name? ");
}


 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 function askQuestion(){
 candidateAnswer = input.question(question);
 }

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
 candidateAnswer = input.question(question);

function gradeQuiz(candidateAnswers) {

  console.log(" Candidate Name: " + candidateName);
  console.log(" Question 1: " + question1);
  console.log(" Your Answer: " + candidateAnswer1);
  console.log(" Correct Answer: " + correctAnswer1);
  if (candidateAnswer === correctAnswer1); {
    console.log("You entered the Correct Answer!");
  }
else {
    console.log("You entered an Incorrect Answer!");
  }
   let grade; 

+ function runProgram() {
 askForName();

 // TODO 1.1c: Ask for candidate's name //
console.log("Hello, " +  candidateName + "!");
askQuestion();
gradeQuiz(this.candidateAnswers);
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
}
 
// Don't write any code below this line //
// And don't change these or your program will not run as expect
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