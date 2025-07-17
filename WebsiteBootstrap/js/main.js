document.addEventListener("DOMContentLoaded", () => {
  console.log("CrunchyClone loaded.");
});

/**
 * Handles form submission and calls registerUser()
 */
function handleRegister(event) {
  event.preventDefault(); // prevent real form submit
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  registerUser(username, email);
  alert("Thank you for signing up!");
}
