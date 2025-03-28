function toggleFavorite(button) {
    // Toggle the favorited class to change heart color
    button.classList.toggle("favorited");

    // You can add some logic to save the favorite status, etc.
    if (button.classList.contains("favorited")) {
        console.log("Added to favorites");
    } else {
        console.log("Removed from favorites");
    }
}


function toggleFilter() {
    var filterOptions = document.getElementById("filterOptions");
    filterOptions.style.display = filterOptions.style.display === "block" ? "none" : "block";
}

function applyFilter() {
    var type = document.querySelector("#filterOptions select:nth-of-type(1)").value;
    var genre = document.querySelector("#filterOptions select:nth-of-type(2)").value;

    console.log("Applying filter:", type, genre);
    // In a real application, you would use these values to filter your search results
    toggleFilter(); // Hide the filter options after applying
}

// function messageSeller(sellerId) {
//     window.location.href = `message.php?seller=${sellerId}`;
// }


function openChatbox() {
    document.getElementById("chatbox").style.display = "block";
}

function closeChatbox() {
    document.getElementById("chatbox").style.display = "none";
}

function sendMessage() {
    let input = document.getElementById("chat-input");
    let message = input.value.trim();
    if (message !== "") {
        let chatMessages = document.getElementById("chat-messages");
        chatMessages.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        input.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
