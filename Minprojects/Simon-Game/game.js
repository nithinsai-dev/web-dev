var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var start = false;
var level = 0;


$(document).keypress(function () {
    if (!start) {
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
});


function playSoundName(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function () {
        $("#" + name).removeClass("pressed");
    }, 100)
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    level += 1;
    $("#level-title").text("Level " + level);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSoundName(randomChosenColour);
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSoundName(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over. Press any key to Restart.");

        startOver();
    }
}