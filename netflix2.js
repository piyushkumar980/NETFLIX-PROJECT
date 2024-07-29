let button = document.getElementById("netflix-signup");
button.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix.html";
});

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.length <= 8) {
    alert("Password must be longer than 8 characters.");
    return false;
  }

  // If the email and password are valid, move to another page
  window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix3.html";
  return false; // it will prevent form submission
}

document.getElementById("toggleButton").addEventListener("click", function () {
  var answer = document.getElementById("answer");
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
});
