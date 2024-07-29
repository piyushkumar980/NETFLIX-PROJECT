let button = document.getElementById("netflix-header-button2");
button.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix2.html";
});

document.getElementById("toggleButton").addEventListener("click", function () {
  var answer = document.getElementById("answer");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton = document.getElementById("toggleButton");
const symbol = document.getElementById("symbol");

toggleButton.addEventListener("click", () => {
  if (symbol.textContent === "+") {
    symbol.textContent = "×";
  } else {
    symbol.textContent = "+";
  }
});

document.getElementById("toggleButton1").addEventListener("click", function () {
  var answer = document.getElementById("answer1");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton1 = document.getElementById("toggleButton1");
const symbol1 = document.getElementById("symbol1");

toggleButton1.addEventListener("click", () => {
  if (symbol1.textContent === "+") {
    symbol1.textContent = "×";
  } else {
    symbol1.textContent = "+";
  }
});

document.getElementById("toggleButton2").addEventListener("click", function () {
  var answer = document.getElementById("answer2");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton2 = document.getElementById("toggleButton2");
const symbol2 = document.getElementById("symbol2");

toggleButton2.addEventListener("click", () => {
  if (symbol2.textContent === "+") {
    symbol2.textContent = "×";
  } else {
    symbol2.textContent = "+";
  }
});

document.getElementById("toggleButton3").addEventListener("click", function () {
  var answer = document.getElementById("answer3");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton3 = document.getElementById("toggleButton3");
const symbol3 = document.getElementById("symbol3");

toggleButton3.addEventListener("click", () => {
  if (symbol3.textContent === "+") {
    symbol3.textContent = "×";
  } else {
    symbol3.textContent = "+";
  }
});

document.getElementById("toggleButton4").addEventListener("click", function () {
  var answer = document.getElementById("answer4");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton4 = document.getElementById("toggleButton4");
const symbol4 = document.getElementById("symbol4");

toggleButton4.addEventListener("click", () => {
  if (symbol4.textContent === "+") {
    symbol4.textContent = "×";
  } else {
    symbol4.textContent = "+";
  }
});

document.getElementById("toggleButton5").addEventListener("click", function () {
  var answer = document.getElementById("answer5");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
const toggleButton5 = document.getElementById("toggleButton5");
const symbol5 = document.getElementById("symbol5");

toggleButton5.addEventListener("click", () => {
  if (symbol5.textContent === "+") {
    symbol5.textContent = "×";
  } else {
    symbol5.textContent = "+";
  }
});

let button1 = document.getElementById("sign-in-button");
button1.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix7.html";
});

let button2 = document.getElementById("last-sign-in-button");
button1.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix7.html";
});

function validateForm() {
  const email = document.getElementById("EMAIL").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If the email and password are valid, move to another page
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix7.html";
  return false; // it will prevent form submission
}
