//START

//VARIABLES--------------------------------------

var answer = Math.floor(Math.random() * 10 + 1);
var resultColor = document.getElementById("result");
var btnClicked = document.getElementById("SubmitBtn");


console.log(answer)




//FUNCTIONS--------------------------------------

function submitGuess(){
    var guessedNum = document.getElementById("inputNum").value;

    
    console.log(answer)

    if(guessedNum > answer){
        result.innerText = "Too high!";
        resultColor.style.color="red";
    }
    else if(guessedNum < answer){
        result.innerText = "Too low!";
        resultColor.style.color = "red";
    }
    else{
        result.innerText = "You're correct!";
        resultColor.style.color = "green";
    }
}

//EVENTS-----------------------------------------

btnClicked.addEventListener("click", submitGuess);