/*
// Approach:-

 for Rock case:-
1) if rock with scissor then rock wins
2) if rock with rock then match tie
3) if rock with paper then rock loose.

 For Paper case:-
 1) If paper with paper then match tie
 2) If paper with rock then paper wins
 3) If paper with scissor then paper loose.

 For Scissor case:-
 1) If Scissor with Scissor then match tie
 2) If Scissor with paper then Scissor wins
 3) If Scissor with rock then Scissor loose.

*/
"use strict";
let uscore = 0; //calculating user score.
let cscore = 0; //calculating computer score.




const rps_game = (choice) => {
  let comp;
  let u_score = document.getElementById("uScore");
  let c_score = document.getElementById("cScore");
  const user = choice;

  let click = new Audio("assets/click.wav");
  click.play();

  let winner = document.getElementById("winner");
  // user input for choice whether it is rock, paper or scissor.
  let userChoice = document.getElementById("uc");
  userChoice.innerHTML =
    user === undefined ? "None" : user;

    let compChoice = document.getElementById("cc");

if(user !== undefined){
   let rpsChoice = ["rock", "paper", "scissor"];
    comp = rpsChoice[Math.floor(Math.random()* rpsChoice.length)];
    compChoice.innerHTML = comp;
}
else{
  compChoice.innerHTML = 'None';
}

  let winnerTemp = `
   <h3>Result: <span id="won"></span> </h3>
   
 `;

//  ****Displaying Choices by user and computer*****

 let displayUserImg = document.getElementById('userChoiceImg');
 let displayCompImg = document.getElementById('compChoiceImg');
  if(user === 'rock'){
    displayUserImg.innerHTML = ` <img src="assets/img/rock-img.png" id="rock" width="100" alt="rock-image">
    <p>User Choice</p> `;
  }
  else if(user === 'paper'){
    displayUserImg.innerHTML = ` <img src="assets/img/paper-img.png" id="rock" width="100" alt="rock-image">
    <p>User Choice</p>`;
  }
  else if(user === 'scissor'){
    displayUserImg.innerHTML = ` <img src="assets/img/scissor-img.png" id="rock" width="150" alt="rock-image">
    <p>User Choice</p> `;
  }
  if(comp === 'rock'){
    displayCompImg.innerHTML = ` <img src="assets/img/rock-img.png" id="rock" width="100" alt="rock-image">
    <p>Computer Choice</p> `;
  }
  else if(comp === 'paper'){
    displayCompImg.innerHTML = ` <img src="assets/img/paper-img.png" id="rock" width="100" alt="rock-image">
    <p>Computer Choice</p>`;
  }
  else if(comp === 'scissor'){
    displayCompImg.innerHTML = ` <img src="assets/img/scissor-img.png" id="rock" width="150" alt="rock-image">
    <p>Computer Choice</p> `;
  }

// ***Applying Conditions of rock, paper, and scissor****

  try {
    if (user === comp && !(user === undefined && comp === undefined)) {
      winner.innerHTML = winnerTemp;
      document.getElementById("won").innerHTML = "Tie";
    } else if (
      (user === "paper" && comp === "scissor") ||
      (user === "rock" && comp === "paper") ||
      (user === "scissor" && comp === "rock")
    ) {
      cscore++;
      winner.innerHTML = winnerTemp;
      let cmnt = ["Try Again", "Don't be sad 😞!", "Better luck next time", "Have Faith!"];
      let randomCmnt = cmnt[Math.floor(Math.random()* cmnt.length)];
      document.getElementById("won").innerHTML = "Computer Won (' "+randomCmnt+" ')";
      c_score.innerText = cscore;
    } else if (
      (user === "paper" && comp === "rock") ||
      (user === "scissor" && comp === "paper") ||
      (user === "rock" && comp === "scissor")
    ) {
      uscore++;
      winner.innerHTML = winnerTemp;
      let cmnt = ["Very Good", "You are doing Great🔥", "Awesome😎", "Well Done!👌"];
      let randomCmnt = cmnt[Math.floor(Math.random()* cmnt.length)];
      document.getElementById("won").innerHTML = randomCmnt;
      // console.log(uscore);
      u_score.innerText = uscore;
    }
  } catch (err) {
    return console.log("Something went wrong" + err);
  }


  //   console.log(rand_num);
  //   console.log("user: " + user);
  //   console.log("comp: " + comp);

  // Announcing Winner Name
  if(uscore === 5 ){
    document.getElementById('containerBox').style.display = 'none';
    document.getElementById('winnerName').style.display = 'inline-block';
    document.getElementById('winName').innerHTML = 'You Won!';
    
  }
  else if(cscore === 5 ){
    // console.log("User loose");
    document.getElementById('containerBox').style.display = 'none';
    document.getElementById('winnerName').style.display = 'inline-block';
    document.getElementById('winName').innerHTML = 'You Loose!';
  }
  
  document.getElementById('uPoints').innerHTML = uscore;
  document.getElementById('cPoints').innerHTML = cscore;
  
};

rps_game();


let reload = document.getElementById("reload");
reload.addEventListener("click", () => {
  window.location.reload();
});
