var Button1 = document.getElementById("my-button-1");
var Button2 = document.getElementById("my-button-2");
var Button3 = document.getElementById("my-button-3");

const searchInput = document.getElementById("search-input");
const searchDropdown = document.getElementById("search-dropdown");
const mainButtons = document.getElementsByClassName('button');
const HotColdBanner = document.getElementById('Hot-Cold-Banner');
var checkBox = document.getElementById("Checkbox");



//buttons nav
Button1.addEventListener("contextmenu", function(event) {
  event.preventDefault(); // pop up when clickking fix
});
Button2.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

Button3.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

Button1.addEventListener("click", function() {
  window.location.replace("index.html");
});

Button2.addEventListener("click", function() {
  window.location.replace("Compare.html");
});

Button3.addEventListener("click", function() {
  window.location.replace("Settings.html");
});




// toggle button save

var checkboxState = JSON.parse(localStorage.getItem("CheckboxState"));

if (checkboxState) {
  HotColdBanner.style.background = "#ff622e";
  checkBox.checked = true;
  for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].style.background = "#e91c1c";
    mainButtons[i].style.boxShadow = "inset 0px 0px 0px 5px #ff622e";
  }

} else {
  HotColdBanner.style.background = "#6391fd";
  checkBox.checked = false;
  for (let i = 0; i < mainButtons.length; i++) {
    mainButtons[i].style.background = "#1c59e9";
    mainButtons[i].style.boxShadow = "inset 0px 0px 0px 5px #6391fd";
  }
}

// Hot-Cold toggle
function boxChecked() {
  if (checkBox.checked == true) {
    // Save the checked state to local storage
    localStorage.setItem("CheckboxState", JSON.stringify(checkBox.checked));
    for (let i = 0; i < mainButtons.length; i++) {
      mainButtons[i].style.background = "#e91c1c";
      mainButtons[i].style.boxShadow = "inset 0px 0px 0px 5px #ff622e";
    }
    HotColdBanner.style.background = "#ff622e";
    
  } else {
    localStorage.setItem("CheckboxState", JSON.stringify(checkBox.checked));
    for (let i = 0; i < mainButtons.length; i++) {
      mainButtons[i].style.background = "#1c59e9";
      mainButtons[i].style.boxShadow = "inset 0px 0px 0px 5px #6391fd";
    }
    HotColdBanner.style.background = "#6391fd";
  }
}






///////////////////////////////////////////////////////////////////////////////////////////////


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}
////////////////////////////////////////////////////////////////////////////////////////////////////