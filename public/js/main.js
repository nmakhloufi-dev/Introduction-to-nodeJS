// Array of names
const names = ["Harry", "Ron", "Hermione", "David", 
    "Hagrid", "Tom", "Albus", "Severus", "Daniel", "Mathias"];

// Function to generate a random name
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Display the random name
document.getElementById("name").textContent = getRandomName();
