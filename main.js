console.log('Hello World!');

//1
let rock = document.querySelector("#rock");
//2
let paper = document.querySelector("#paper");
//3
let scissor = document.querySelector("#scissor");

let msg = document.querySelector(".msg");

let us = 0;
let cs = 0;

let uscore = document.querySelector("#userscore");
let cscore = document.querySelector("#compscore");

rock.addEventListener("click", (e) => {
  let rand = Math.floor((Math.random() * 3) + 1);
  console.log("rock random no. =", rand);
  if (rand === 1) {
    msg.textContent = "It's a draw";
  } else if (rand === 2) {
    msg.textContent = "Computer won";
    cs++;
    cscore.textContent = `Computer - ${cs}`;
  } else if (rand === 3) {
    msg.textContent = "You won";
    us++;
    uscore.textContent = `You - ${us}`;
  }
});

paper.addEventListener("click", (e) => {
  let rand = Math.floor((Math.random() * 3) + 1);
  console.log("paper random no. =", rand);
  if (rand === 1) {
    msg.textContent = "You won";
    us++;
    uscore.textContent = `You - ${us}`;
  } else if (rand === 2) {
    msg.textContent = "It's a draw";
  } else if (rand === 3) {
    msg.textContent = "Computer won";
    cs++;
    cscore.textContent = `Computer - ${cs}`;
  }
});

scissor.addEventListener("click", (e) => {
  let rand = Math.floor((Math.random() * 3) + 1);
  console.log("scissor random no. =", rand);
  if (rand === 1) {
    msg.textContent = "Computer won";
    cs++;
    cscore.textContent = `Computer - ${cs}`;
  } else if (rand === 2) {
    msg.textContent = "You won";
    us++;
    uscore.textContent = `You - ${us}`;
  } else if (rand === 3) {
    msg.textContent = "It's a draw";
  }
});
let btn = document.querySelector("button");

btn.addEventListener("click",(e) => {
  document.location.reload();
  
  
  
})