function welcomeMessage() {
  alert("Welcome to Urban Vogue Fashion Store! 🛍️");
}

function changeText() {
  document.getElementById("myText").innerHTML =
    "Fashion is your personal style ✨";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("welcomeBtn").addEventListener("click", function () {
  document.querySelector(".mt-3").innerText = "Hello! 🎉";
});

function changeText() {
  document.getElementById("aboutText").innerText =
    "About page text changed successfully 🎉";
}


function toggleInfo() {
  const info = document.getElementById("storeInfo");

  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}