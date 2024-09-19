//these are the html components
const lowerBound = document.getElementById(`lowerBound`);
const upperBound = document.getElementById(`upperBound`);
const guess = document.getElementById(`guessNum`);
const tryBtn = document.getElementById(`tryBtn`);
const hint = document.getElementById("hint");
const restartBtn = document.getElementById(`restartBtn`);
const tries = document.getElementById(`tries`);

//logic variables for the game
let goalNum;
let randomize = true;
let count = 0

tryBtn.onclick = function(){
    hint.style.color = "white"; // this is so when it resets, it goes back to white!
    //make sure that the user fills up everything
    if(lowerBound.value == "" || upperBound.value =="" || guess.value == ""){
        window.alert("Fill up all fields");
        return false;
    }

    if(lowerBound.value > upperBound.value){
        let numholder = lowerBound.value;
        window.alert("Fixed it for you!")
        lowerBound.value = upperBound.value
        upperBound.value = numholder
    }

    //let the game begin!
    if (randomize == true){
        goalNum = Math.floor(Math.random() * (Number(upperBound.value) - Number(lowerBound.value))) + Number(lowerBound.value)
        randomize = false;
        //I had to make them all numbers if not it would concatanate them thinking of them as strings ;-;
    }


    if(guess.value < goalNum){
        hint.textContent = "Too low!"
        count++;
        tries.textContent = count;
    }
    else if(guess.value > goalNum){
        hint.textContent = "Too high!"
        tries.textContent = count;
    }
    else{
        hint.textContent = "You got it!"
        hint.style.color = "rgb(210, 71, 150)";
        confetti();
    }
}

//reset eveything
restartBtn.onclick = function(){
    randomize = true;
    lowerBound.value = "";
    upperBound.value = "";
    guess.value = "";
    count = 0;
    tries.textContent = count;
    hint.textContent = "Let's do this again!";
}