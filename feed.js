console.log('Hello World!');
let close = document.querySelector(".close");

let dropdown = document.querySelector(".dropdown");

let menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  dropdown.classList.replace("vh","vs")
  ;
  console.log("menu clicked")
});

close.addEventListener("click", (e) => {
  dropdown.classList.replace("vs", "vh");
});

