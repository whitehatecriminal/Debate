// Function to send a message
function sendMessage() {
  // Get the message input and chat box elements
  const messageInput = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");

  // Get the message from the input field
  const message = messageInput.value.trim();

  // If there's no message, do nothing
  if (message === "") return;

  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", "user");
  messageElement.textContent = message;

  // Append the message to the chat box
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the message input field
  messageInput.value = "";
}

// Get the send button element by its ID
const sendButton = document.getElementById("sendMessage"); // Or use getElementById("sendButton") if you have an id

// Attach the event listener to the send button
sendButton.addEventListener("click", function (event) {
  // Prevent form submission (if the button is inside a form)
  event.preventDefault();
  // Call the sendMessage function
  sendMessage();
});

// Add event listener for the Enter key press in the message input
document
  .getElementById("messageInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

//display value

document.getElementById("addtopic").addEventListener("click", function () {
  window.location.href = "topics.html";
});

document.addEventListener("DOMContentLoaded", function () { //  Waits until the HTML page is fully loaded before running the code inside
  // taking data from local storage
  const debatData = JSON.parse(localStorage.getItem("debat"));
  
  // Checks if the retrieved data is a valid array. If yes we proceed to display the topics.
  if (Array.isArray(debatData)) { 
    //Finds the HTML element with the class "topic" — this is where the debate topics will be added.
    const topicContainer = document.querySelector(".topic");

    debatData.forEach(topic => { // accing each array element
      const newListItem = document.createElement("li");

      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      a.href = "debate.html"; // Can change if needed
      // anchor pe title set
      a.textContent = topic.title;
      h3.appendChild(a);

      const p = document.createElement("p");
      p.textContent = topic.description;

      newListItem.appendChild(h3);
      newListItem.appendChild(p);

      topicContainer.appendChild(newListItem);
    });
  }
});

