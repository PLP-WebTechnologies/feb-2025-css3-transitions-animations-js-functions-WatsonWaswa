// Access elements
const animateBtn = document.getElementById("animateBtn");
const savePrefsButton = document.getElementById("savePrefs");
const buttonColorInput = document.getElementById("buttonColor");

// Check for saved preferences in localStorage
if (localStorage.getItem("buttonColor")) {
  animateBtn.style.backgroundColor = localStorage.getItem("buttonColor");
}

// Save preferences when the user chooses a color
savePrefsButton.addEventListener("click", function() {
  const selectedColor = buttonColorInput.value;
  // Store the color preference in localStorage
  localStorage.setItem("buttonColor", selectedColor);
  // Change the button color immediately
  animateBtn.style.backgroundColor = selectedColor;
  alert("Preferences saved!");
});

// Trigger animation on button click
animateBtn.addEventListener("click", function() {
  // Add a temporary class to trigger animation
  animateBtn.classList.add("animate-button");
  setTimeout(function() {
    // Remove the animation class after the animation ends
    animateBtn.classList.remove("animate-button");
  }, 500); // Duration of the animation
});
