let username = prompt();
let password = prompt();
if (
  username === null ||
  password === null ||
  username === "" ||
  password === ""
) {
  alert("Username is required");
} else if (username === "admin" && password === "1234") {
  alert("Hello");
} else if (username === "john" && password === "qwerty") {
  alert("Hello");
} else {
  alert("Invalid username or password");
}
