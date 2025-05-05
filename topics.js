function redirectToDebatePage() {  
  // fe
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById('description').value.trim();
  
  if (title === "" || description === "") {
      alert("Please fill in both fields.");
      return;
    }

    const topices = JSON.parse(localStorage.getItem("debat")) || [];
    topices.push({ title, description });
    localStorage.setItem("debat", JSON.stringify(topices));
  }

  document.getElementById("cre").addEventListener("click", function () {
    window.location.href = "debate.html";
  });