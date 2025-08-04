document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the input values from the sign-up form
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Simple validation to check if all fields are filled
            if (username && email && password) {
                // Create an object with the user data
                const user = {
                    username: username,
                    email: email,
                    password: password,
                };

                // Store user data in localStorage
                localStorage.setItem("user", JSON.stringify(user));
                alert("Account created successfully! You can now log in.");
                window.location.href = "index.html"; // Redirect to login page
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
