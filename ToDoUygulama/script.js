function QuestiOn(text,choices,answer){
    this.text= tex;
    this.choices= choices;
    this.answer= answer;
}

question.prototype.checkAnswer= function(answer){

    return this.answer === answer;
}


function Quiz(questions){
    this.questions= questions;
    this.score= 0;
    this.questionIndex= 0;
    
}
//quiz prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// quiz isFinish

Quiz.prototype.isFinish= function(){
    return this.questions.length === this.questionsIndex;
}

//quiz guess
Quiz.prototype.guess= function(answer){
    var question = this.getQuestion();


    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question("Whats the best programming language ?", ["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("Whats the most popular programming language?", ["C#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("Whats the best modern programming language ?", ["C#","javascript","pyhton","asp.net"],"javascript");

var questions= [q1,q2,q3];


//start quiz

var quiz= new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.score);
console.log(quiz.isFinish());