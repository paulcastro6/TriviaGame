var questions = [{
    question: "What is Superman's real name?",
    choices: ["Clark Kent", "Kal-El", "Bruce Wayne", "Hal Jordan"],
    correctAnswer: 1
}, {
    question: "What's the name of the first Robin?",
    choices: ["Jason Todd", "Damian Wayne", "Tim Drake", "Dick Grayson"],
    correctAnswer: 3
}, {
    question: "What does Wonder Woman's lasso make a person do?",
    choices: ["Makes you tell the truth", "Makes you fall asleep", "Makes you stay frozen", "Makes you grieve in pain"],
    correctAnswer: 0
}, {
    question: "Who Killed Batman's Robin?",
    choices: ["Bane", "Clayface", "The Joker", "Scarecrow"],
    correctAnswer: 2
}, {
    question: "What villain is an actual animal?",
    choices: ["Catwoman", "Gorilla Grod", "The Penguin", "Black Manta"],
    correctAnswer: 1
}];
console.log(1)

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".triviaNotification").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".triviaNotification").text("Please select an answer");
                $(document).find(".triviaNotification").show();
                console.log("answer");
            } else {
                
                $(document).find(".triviaNotification").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    
                    $(document).find(".nextButton").text("Play Again?");
                    console.log("total score");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Next");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

//$(document).one('click', function() {  
//var globalTimer = 50;
//var counter = setInterval(timer, 1000);
//function timer() {
// timer -=1;
 //if (timer == 0) {
   //gameQuestions.noAnswer++
   //$('#result').html('<p>You\'re out of time!');
   //clearInterval(counter);

function displayCurrentQuestion() {

    console.log("display current question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".triviaContainer > .question");
    var choiceList = $(document).find(".triviaContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".triviaContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".triviaContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}