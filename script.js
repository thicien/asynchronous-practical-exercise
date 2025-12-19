// Selecting elements
const loadBtn = document.getElementById("loadBtn");
const usernameInput = document.getElementById("username");
const profileDiv = document.getElementById("profile");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

// CUSTOM EVENTS
const loadingEvent = new Event("loading");
const loadedEvent = new Event("loaded");
const errorEvent = new Event("errorOccurred");

// EVENT LISTENERS
document.addEventListener("loading", () => {
    loadingText.style.display = "block";
    profileDiv.innerHTML = "";
    errorText.textContent = "";
});

document.addEventListener("loaded", () => {
    loadingText.style.display = "none";
});

document.addEventListener("errorOccurred", () => {
    loadingText.style.display = "none";
});

// MAIN ASYNC FUNCTION
async function loadGitHubProfile(username) {
    try {
        document.dispatchEvent(loadingEvent);

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        document.dispatchEvent(loadedEvent);
        displayProfile(data);

    } catch (error) {
        document.dispatchEvent(errorEvent);
        errorText.textContent = error.message;
    }
}

// DISPLAY FUNCTION
function displayProfile(user) {
    profileDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar">
        <h3>${user.name || "No name provided"}</h3>
        <p>Public Repositories: ${user.public_repos}</p>
    `;
}

// BUTTON CLICK EVENT
loadBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        loadGitHubProfile(username);
    }
});
