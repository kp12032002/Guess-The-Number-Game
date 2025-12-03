// Selecting Elements

var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var numofguess = 3

// Generate Random Number form 1 to 5

var randomNumber = Math.floor(Math.random()*10)+1 //1 to 10
if(randomNumber>5)
{
    randomNumber=randomNumber-5
}

// Event Handler Function

function checkTheNumber() 
{
    if(inputBox.value == randomNumber)
    {
        alert("You Got it Right, Congratulations.")
        result.textContent = "You are Right"
    }
    else {
        numofguess = numofguess-1
        if(numofguess==0)
        {
            alert("You Lost, Generated Random Number is "+ randomNumber)
        }
        guesscount.textContent = "Available guess: "+ numofguess
        result.textContent = "You are Wrong!"
    }
}