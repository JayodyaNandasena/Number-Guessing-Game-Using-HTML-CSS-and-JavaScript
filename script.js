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
        disp.innerHTML = count;
        
        let num = document.getElementById("inNum").value;
    
        if (rNum < num) {
            alert("Guess a lesser number!");
        } else if (rNum > num) {
            alert("Guess a higher number!");
        } else {
            alert("Congragulations! You Win!!");
            document.getElementById("btnSubmit").disabled = true;
        } 
    } else {
        disp.innerHTML = count;
        document.getElementById("btnSubmit").disabled = true;
        alert("Maximum Number of Attempts Exceeded, the number is "+rNum);
    }
}
