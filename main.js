console.log("JS is working!");
let fcolors = ["RED", "GREEN", "YELLOW", "BLUE", "PINK", "ORANGE"];
let bcolors = ["aqua", "darkcyan", "yellogreen", "grey"];
let blockColor = ["RED", "BLUE", "YELLOW", "GREEN"];
let divs = document.querySelectorAll(".block");
let refreshIntervalId = "";
let score = 0;
// 4. CODE TO RESET THE GAME- start fresh
function reset() {
  score = 0;
  document.querySelector("#startGame").style.display = "block";
  var one = document.querySelector("#one");
  one.removeEventListener("click", evaluate1);

  var two = document.querySelector("#two");
  two.removeEventListener("click", evaluate2);

  var three = document.querySelector("#three");
  three.removeEventListener("click", evaluate3);

  var four = document.querySelector("#four");
  four.removeEventListener("click", evaluate4);
  document.querySelector("#startGame").addEventListener("click", startFunc);
  clearInterval(refreshIntervalId);
}
//  1. INITIALIZE EVENT LISTENERS
let start = document.querySelector("#startGame");
start.addEventListener("click", startFunc);
function startFunc() {
  var one = document.querySelector("#one");
  one.addEventListener("click", evaluate1);
  var two = document.querySelector("#two");
  two.addEventListener("click", evaluate2);
  var three = document.querySelector("#three");
  three.addEventListener("click", evaluate3);
  var four = document.querySelector("#four");
  four.addEventListener("click", evaluate4);
  refreshIntervalId = setInterval(begin, 1200);
}
// 2. APPLICATION LOGIC and TO SET RANDOM COLORS FOR EACH DIV.(start game and four blocks)
function begin() {
  let test = (document.querySelector("#score").innerHTML = "");
  document.querySelector("#startGame").style.display = "none";
  document.querySelector("#startGame").removeEventListener("click", startFunc);
  let show = document.querySelector("#prompt");
  show.innerHTML = fcolors[Math.floor(Math.random() * fcolors.length)];
  show.style.color = fcolors[Math.floor(Math.random() * fcolors.length)];
  show.style.fontWeight = "bold";
  show.style.background = bcolors[Math.floor(Math.random() * bcolors.length)];
  let index = 4; //helped by robert provine
  for (var i = 0; i < divs.length; i++) {
    let cl = Math.floor(Math.random() * index);
    index--;
    divs[i].style.backgroundColor = blockColor[cl];
    blockColor.splice(cl, 1);
  }
  blockColor = ["RED", "BLUE", "YELLOW", "GREEN"];
}
//  3. POP UP HELP(instructions to the game)
function help() {
  document.querySelector(".helpText").style.display = "block";
  setTimeout(function() {
    //helped by david
    document.querySelector(".helpText").style.display = "none";
  }, 5000);
}
// 5. EVALUATE USER MOVE TO CALCULATE SCORE
function evaluate1() {
  let color1 = document.querySelector("#one").style.backgroundColor;
  let show = document.getElementById("prompt").innerHTML;
  if (show.toLowerCase() === color1.toLowerCase()) {
    score = score + 10;
  } else {
    document.querySelector("#score").innerHTML =
      "GAME OVER!!! Your score is " + score;
    reset();
  }
}
function evaluate2() {
  let color2 = document.querySelector("#two").style.backgroundColor;
  let show = document.getElementById("prompt").innerHTML;
  if (show.toLowerCase() === color2.toLowerCase()) {
    score = score + 10;
  } else {
    document.querySelector("#score").innerHTML =
      "GAME OVER!!! Your score is " + score;
    reset();
  }
}
function evaluate3() {
  let color3 = document.querySelector("#three").style.backgroundColor;
  let show = document.getElementById("prompt").innerHTML;
  if (show.toLowerCase() === color3.toLowerCase()) {
    score = score + 10;
  } else {
    document.querySelector("#score").innerHTML =
      "GAME OVER!!! Your score is " + score;
    reset();
  }
}
function evaluate4() {
  let color4 = document.querySelector("#four").style.backgroundColor;
  let show = document.getElementById("prompt").innerHTML;
  if (show.toLowerCase() === color4.toLowerCase()) {
    score = score + 10;
  } else {
    document.querySelector("#score").innerHTML =
      "GAME OVER!!! Your score is " + score;
    reset();
  }
}
//  4. TO RESTART APPLICATION
let restart = document.querySelector(".restart1");
restart.addEventListener("click", reset);
