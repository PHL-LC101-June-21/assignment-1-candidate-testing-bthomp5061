const input = require('readline-sync');
 
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
 let candidateName = input.question("What is your name? ");

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let quizquestion = ("Who was the first American woman in space?");
let correctAnswer = ("Sally Ride");
+ let canidateanswer;
let candidateAnswer ="";
let question;
let correctAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
 
 
function askForName() {
 // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("What is your name? ");
}


 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 + let grade:
 function askQuestion(){
 candidateAnswer = input.question(question);
 }

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
function gradeQuiz(candidateAnswers) {
if (candidateAnswer === correctAnswer){
 let grade; = passed
+ return grade;
}else{
  let grade = "Failed";
+ return grade:
}
}
+ function runProgram() {
 askForName();
 // TODO 1.1c: Ask for candidate's name //
console.log("Hello, " + candidateName);
askQuestion();
gradeQuiz(this.candidateAnswers);
+ grade = gradeQuiz(this.candidateAnswers);
+ console.log("You " + grade);
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