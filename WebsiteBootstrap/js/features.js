// Simulated user database
let users = [];

/**
 * Adds a user to the simulated database
 */
function registerUser(username, email) {
  users.push({ username, email });
  console.log(`Registered user: ${username}`);
}

/**
 * Searches for an anime in a mocked array
 */
function searchAnime(keyword) {
  const animeList = ["Naruto", "One Piece", "Attack on Titan", "Bleach"];
  const results = animeList.filter(title => title.toLowerCase().includes(keyword.toLowerCase()));
  console.log("Search results:", results);
}

/**
 * Adds anime to a simulated watchlist
 */
function addToWatchlist(username, animeTitle) {
  console.log(`${animeTitle} added to ${username}'s watchlist`);
}

/**
 * Simulates playing an anime episode
 */
function playEpisode(animeTitle, episodeNumber) {
  console.log(`Now playing ${animeTitle}, Episode ${episodeNumber}`);
}

/**
 * Toggles dark mode (simulated)
 */
function toggleDarkMode() {
  console.log("Dark mode toggled (simulated)");
}

function toggleDarkMode() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  const sections = document.querySelectorAll("section, header, footer");
  sections.forEach(el => el.classList.toggle("bg-dark"));
  console.log("Dark mode toggled (simulated)");
}
