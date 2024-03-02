document.getElementById("btnAgain").disabled = true;
document.getElementById("message").style.visibility = "hidden";

let generateNum = () => {
    let rNum = Math.round(Math.random() * 10);
    console.log(rNum);
    return rNum;
}

var gNum = generateNum();

let count = 0;
let btn = document.getElementById("btnSubmit");
let disp = document.getElementById("display");

btnSubmit.onclick = function () {
    count++;
    let rNum = gNum;
    let num = document.getElementById("inNum").value;
    let isGuessed=false;

    attempts.innerHTML = count;
    left.innerHTML = 3 - count;

    if (count < 3) {
        if (rNum < num) {
            document.getElementById("message").style.visibility = "visible";
            message.innerHTML = "Guess a lesser number!";
        } else if (rNum > num) {
            document.getElementById("message").style.visibility = "visible";
            message.innerHTML = "Guess a higher number!";
        } else {
            document.getElementById("message").style.visibility = "visible";
            message.innerHTML = "Congragulations! You Won!!";
            document.getElementById("btnSubmit").disabled = true;
            isGuessed=true;
        }
    } else if (count == 3 && rNum == num) {
        message.innerHTML = "Congragulations! You Won!!";
        document.getElementById("btnSubmit").disabled = true;
    } else {
        document.getElementById("btnSubmit").disabled = true;
        message.innerHTML = "Maximum Number of Attempts Exceeded, the number is " + rNum;
    }


    if (count==3 || isGuessed==true) {
        document.getElementById("btnAgain").disabled = false;
        // const btnAgain = document.createElement('button');
        // btnAgain.textContent = 'Play Again';
        // document.body.appendChild(btnAgain);
    }
}


