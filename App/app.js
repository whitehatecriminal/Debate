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

let debatData = [];

document.addEventListener("DOMContentLoaded", function () {
  // Load debate data from localStorage
  debatData = JSON.parse(localStorage.getItem("debat"));

  if (Array.isArray(debatData)) {
    const topicContainer = document.querySelector(".topic");

    debatData.forEach((topic, index) => {
      const newListItem = document.createElement("li");

      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      const menu = document.createElement('img')
      menu.id = 'topicedt'
      menu.src = 'src/img/dot-men.svg'
      // menu.width = '16px';
      menu.alt = 'edt'

      a.textContent = topic.title;

      // Optional: Set id if you want to access this later
      a.id = `topic-${index}`;

      // Click event to store index and title
      a.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent immediate navigation
        localStorage.setItem("selectedDebateIndex", index);
        window.location.href = "debate.html";
      });

      h3.appendChild(a);
      h3.appendChild(menu); //append image to the array index

      const p = document.createElement("p");
      p.textContent = topic.description;

      newListItem.appendChild(h3);
      newListItem.appendChild(p);

      topicContainer.appendChild(newListItem);
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const index = localStorage.getItem("selectedDebateIndex");
  const debatData = JSON.parse(localStorage.getItem("debat"));

  if (debatData && debatData[index]) {
    document.getElementById("welcomtopic").innerHTML = `Welcome to ${debatData[index].title}`;
  }
});
