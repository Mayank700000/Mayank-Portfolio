alert("Turn off desktop mode if turned on.");

let boxes = document.querySelectorAll(".box");
let restartbtn = document.querySelector("#res");

let winnerbar = document.querySelector(".winnerbar");
let nbtn = document.querySelector(".new");
let winnern = document.querySelector(".winner");
let turnO = true;

const winPatterns = [ 
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

function reset() {
  turnO = true;
  enabled();
  winnerbar.classList.add("a");
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      box.disabled = true;
      checkw();
    }
  });
});

const showwinner = (winner) => {
  winnern.innerText = `Winner is ${winner}`;
  winnerbar.classList.remove("a");
  disabled();
};

const disabled = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enabled = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const checkw = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
      showwinner(pos1val);
      console.log(`winner${pos1val}`);
    }
  }
};

nbtn.addEventListener("click", reset);
restartbtn.addEventListener("click", reset);