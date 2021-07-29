class Quiz{
  constructor(questions){
    this.score = 0;
    this.questions = questions; 
    this.questionIndex = 0;
  }

  getQuestion(){
    return this.questions[this.questionIndex];
  }

  guess(answer){
    if(this.getQuestion().isCorrectAnswer(answer)){
      this.score++
    }
    this.questionIndex++;
  }

  isEnded(){
    return this.questionIndex === this.questions.length;
  }
}

class Question{
  constructor(text, choices, answer){
    this.text = text;
    this.choices = choices ;
    this.answer = answer;
  }

  isCorrectAnswer(choice){
    return this.answer === choice;
  }
}

// ! Display Question
function displayQuestion(){
  if(quiz.isEnded()){
    showScores();
  }else{
    // * show question 
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestion().text;
    // * show options
    let choices = quiz.getQuestion().choices;
    for(let i = 0; i < choices.length; i++){
      let choiceElement = document.getElementById("choice" + i)
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i])
    }

    showProgress();
  }
}

// ! Guess Function 

function guess(id, guess){
  let button = document.getElementById(id);
  button.onclick=function(){
    quiz.guess(guess);
    displayQuestion();
  }
}

// ! Show Quiz Progress
function showProgress(){
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}

// ! Show Score
function showScores(){
  let quizEndHTML = `
    <h1> Quiz Completed </h1>
    <h2 id='score'>Your Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
      <a href='index.html'> Take Quiz Again</a>
    </div>
  `;

  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// ! Create Quiz Questions 
let questions = [
  new Question("Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
  new Question("Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
  new Question("Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"),
  new Question("Which is best for Artificial Intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"),
]

let quiz = new Quiz(questions);

displayQuestion();

//! Adding a countdown;
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes/ 60;

let counting = document.getElementById("count-down");

function startCountDown(){
  let quizTimer = setInterval(() => {
    if(quizTime <= 0){
      clearInterval(quizTimer);
      showScores();
    }else{
      quizTime--;
      let seconds = Math.floor(quizTime % 60);
      let minute = Math.floor(quizTime/60) % 60;
      counting.innerHTML = `TIME: ${minute}:${seconds}`
    }
  }, 1000);
}
startCountDown();