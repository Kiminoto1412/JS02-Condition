let score = +prompt("Input your score");
let message =
  score < 50
    ? "F"
    : score >= 50 && score <= 59
    ? "D"
    : score >= 60 && score <= 69
    ? "C"
    : score >= 70 && score <= 79
    ? "B"
    : score > 80
    ? "A"
    : "Input your score";
