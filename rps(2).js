let user_score = 0;
let com_score= 0;
let totalRounds = 0;
let currentRound = 0;

const choices = document.querySelectorAll(".choice");
const user_img = document.querySelector(".user-turn img");
const comp_img = document.querySelector(".comp-turn img");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


window.onload = () => {
    document.getElementById("roundModal").style.display = "flex";
};

let draw = ()=>{
    msg.innerText = "Draw Match Nobody Wins!! RETRY";
};

let userwin = ()=>{
    user_score+=1;
    user.innerText = user_score;
    msg.innerText = "Congrats!!!! You Win";
};

let cmpwin = ()=>{
    com_score +=1;
    comp.innerText = com_score;
    msg.innerText = "Upps!!!! You loose";
};

let gencomchoice = ()=>{
    let arr = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
};

let playgame = (user_choice)=>{
    console.log("ME: ",user_choice);
    const comp_choice = gencomchoice();
    console.log("COMPUTER: ",comp_choice);
    comp_img.src = `${comp_choice}.png`;

    if(comp_choice == user_choice){
        draw();
    }
    else{
        if(user_choice === "rock"){
            if(comp_choice == "paper")
                cmpwin();
            else
                userwin();
        }
        if(user_choice == "paper"){
            if(comp_choice == "rock")
                userwin();
            else
                cmpwin();
            
        }
        if(user_choice == "scissors"){
            if(comp_choice == "rock")
                cmpwin();
            else
                userwin();
        }
    }
     currentRound++;

    if (currentRound >= totalRounds) {
        msg.innerText = `🎮 Game Over! Final Score - You: ${user_score}, Comp: ${com_score}`;
        document.getElementById("Final").style.display="flex";
        document.querySelector(".FinalMsg").innerText=`🎮 Game Over!\nFinal Score:\nYou: ${user_score}||Comp: ${com_score}`;

        // Disable all choice buttons
        choices.forEach(choice => {
            choice.style.pointerEvents = "none";
        });
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        user_img.src = `${user_choice}.png`;
        playgame(user_choice);
    })
});
function startGame() {
    const input = document.getElementById("roundInput").value;
    totalRounds = parseInt(input);
    if (totalRounds > 0) {
        document.getElementById("roundModal").style.display = "none";
        msg.innerText = "Game Started! Play your move.";
        choices.forEach((choice)=>{
            choice.style.pointerEvents="auto"
        })
    } else {
        alert("Please enter a valid number of rounds.");
    }
}
function RestartGame(){
    user_score=0;
    com_score=0;
    totalRounds = 0;
    currentRound = 0;
    user.innerText=user_score;
    comp.innerText=com_score;
    document.getElementById("Final").style.display="none";
    document.getElementById("roundModal").style.display="flex";
}
function Re(){
    location.reload();
}
function exit(){
    const ans=prompt("Are you sure you want to exit?");
    if(ans.toLowerCase()==="yes"){
    window.close();
    }
    
}