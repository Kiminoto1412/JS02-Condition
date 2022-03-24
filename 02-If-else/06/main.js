let input1 = prompt();
let input2 = prompt();
num1 = +input1;
num2 = +input2;
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  alert("Invalid number");
} else if (typeof num1 === "number" && typeof num2 === "number") {
  alert(num1 + num2);
} else if (
  input1 === null ||
  input1 === "" ||
  input2 === null ||
  input2 === ""
) {
  alert("Invalid number");
} else {
  alert("Invalid number");
}
