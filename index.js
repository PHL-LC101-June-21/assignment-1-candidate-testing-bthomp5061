const input = require('readline-sync');
const quiz = require('./candidate-testing');


let questions = ["Candidate Name:  ", "True or false: 5000 meters = 5 kilometers.", "(5 + 3)/2 * 10 = ?","Given the array [8, Orbit, Trajectory, 45]what entry is at index 2?","Who was the first American woman in space? ","What is the minimum crew size for the International Space Station(ISS)?"];
let answers = ["Can Twin","True","40","tajectory","sally ride","3"];
let response = [];
let correctAnswers = 2;

function askQuestion() {
	for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${questions[i]}
Your Answer: `);
         console.log(`Correct Answer: ${correctAnswers[i]}`);
	}
	return;
}





let score= correctAnswers / questions.length;
console.log("CAN TWIN");
console.log("Correct Answers-   " + score);
console.log(score * 100 + "% on test");
if ([score * 100] > [8 * 100])
console.log("PASS!");
else if ([score * 100] < [8 * 100])
console.log("FAIL!");