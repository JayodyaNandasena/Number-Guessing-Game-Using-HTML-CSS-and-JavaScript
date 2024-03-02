let generateNum=()=>{
    let rNum=Math.round(Math.random()*10) ;
    console.log(rNum);
    return rNum;
}

var gNum=generateNum();

let checkNum=(rNum)=>{
    rNum=gNum;

    let num=document.getElementById("inNum").value;

    if (rNum<num) {
        alert("Guess a lesser number!");
    } else if (rNum>num) {
        alert("Guess a higher number!");
    }else{
        alert("Congragulations! You Win!!");
    }


}
