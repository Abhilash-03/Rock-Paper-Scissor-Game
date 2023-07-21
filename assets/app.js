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
  // Generating random numbers b/w 0 to 100.
  let rand_num = Math.floor(Math.random() * 19);

  let comp;
  let u_score = document.getElementById('uScore');
  let c_score = document.getElementById('cScore');
  const user = choice;
let winner = document.getElementById('winner');
  // user input for choice whether it is rock, paper or scissor.
  let userChoice = document.getElementById('uc');
  userChoice.innerHTML = (user === undefined)?'Choose rock, paper, or scissor':user;

  if (rand_num <= 6 && rand_num >= 0) {
    comp = "rock";
  } else if (rand_num > 6 && rand_num <= 12) {
    comp = "paper";
  } else {
    comp = "scissor";
  }

 let compChoice = document.getElementById('cc');
 compChoice.innerHTML = comp;

 let winnerTemp = `
   <h3>Result: <span id="won"></span> </h3>
   
 `

  try{
 
    if (user === comp) {
        // console.log("Match tie");
        winner.innerHTML = winnerTemp;
        document.getElementById('won').innerHTML = "Tie";

      } else if (
        (user === "paper" && comp === "scissor") ||
        (user === "rock" && comp === "paper") ||
        (user === "scissor" && comp === "rock")
      ) {
          cscore++;
        // console.log("comp won");
        winner.innerHTML = winnerTemp;
        document.getElementById('won').innerHTML = "Computer Won";
        c_score.innerText = cscore;


      } else if (
        (user === "paper" && comp === "rock") ||
        (user === "scissor" && comp === "paper") ||
        (user === "rock" && comp === "scissor")
      ) {
        // console.log("user won");
        uscore++;
        winner.innerHTML = winnerTemp;
        document.getElementById('won').innerHTML = "User Won";
        // console.log(uscore);
        u_score.innerText = uscore;
      } 

     
  }
  catch(err){
       return console.log("Something went wrong" + err)
  }


//   console.log(rand_num);
//   console.log("user: " + user);
//   console.log("comp: " + comp);
};

rps_game();

let reload = document.getElementById('reload');
reload.addEventListener("click", ()=>{
    window.location.reload();

})

