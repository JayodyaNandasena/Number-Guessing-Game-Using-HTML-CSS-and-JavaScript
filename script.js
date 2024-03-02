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

    if (count<3) {
        attempts.innerHTML = count;
        left.innerHTML = 3-count;
        
        let num = document.getElementById("inNum").value;
    
        if (rNum < num) {
            message.innerHTML = "Guess a lesser number!";
        } else if (rNum > num) {
            message.innerHTML = "Guess a higher number!";
        } else {
            message.innerHTML = "Congragulations! You Win!!";
            document.getElementById("btnSubmit").disabled = true;
        } 
    } else {
        attempts.innerHTML = count;
        left.innerHTML = 3-count;
        document.getElementById("btnSubmit").disabled = true;
        message.innerHTML = "Maximum Number of Attempts Exceeded, the number is "+rNum;
    }
}
