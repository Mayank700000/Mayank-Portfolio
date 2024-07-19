let expression = "";

document.querySelectorAll(".digit").forEach(button => {
  button.addEventListener("click", (e)=> {
    const value = e.target.innerHTML;

    if (value === "=") {
      expression = eval(expression);
      }
      
     else if (value === "C") {
      expression = "";
       }
    else {
      expression += value;
    }

    document.querySelector("input").value = expression;
  });
});