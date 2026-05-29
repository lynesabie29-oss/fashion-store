function welcomeMessage() {
  alert("Welcome to Bramavill Fashion! 🛍️");
}

function changeText() {
  document.getElementById("myText").innerHTML = "Fashion is your personal style ✨";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("welcomeBtn").addEventListener("click", function () {
  document.querySelector(".mt-3").innerText = "Welcome! 🎉";
});

function changeText() {
  document.getElementById("aboutText").innerText =
    "shop with bramavill🎉";
}


function toggleInfo() {
  const info = document.getElementById("storeInfo");

}

let storeInfo=document.getElementById("storeInfo")
if(storeInfo.style.display="none"){
  storeInfo.style.display="block"
}
else{
  storeInfo.style.display="none"
}