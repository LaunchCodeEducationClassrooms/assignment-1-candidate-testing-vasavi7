const input = require('readline-sync');
//Assignment-1
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5000 meters = 5 kilometers. ","3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
    // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please enter your name: ");
 }
 
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for(let i=0; i<questions.length; i++){
      candidateAnswers[i] = input.question(questions[i]);

  }
}

function gradeQuiz(candidateAnswers) {
console.log("");
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Candidate Name: ${candidateName}\n`);
let correctAnswersCount = 0;
for(let i=0; i<correctAnswers.length; i++){
  console.log(`${questions[i]}
  Your Answer: ${candidateAnswers[i]}
  Correct Answer: ${correctAnswers[i]}\n`);
  if(candidateAnswers[i].toString().toLowerCase() === correctAnswers[i].toString().toLowerCase()){
    correctAnswersCount++;
  }
}
  let grade = (correctAnswersCount / questions.length) * 100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}\n`);
    askQuestion();
  const result = gradeQuiz(this.candidateAnswers);
  console.log(`>>> Overall Grade: ${result}% ( ${result/20} of 5 responses correct) <<<`);
  if (result < 80) {
    console.log(`<<< Status: Failed <<<`);
  } else {
    console.log(`<<< Status: Pass <<<`);
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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