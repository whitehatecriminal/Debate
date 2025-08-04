// const loginForm = document.getElementById('loginForm');
if (document.getElementById('loginForm')) {
    document.getElementById('submit').addEventListener('click', function(event){
        event.preventDefault();

        // Get the input values from the login form
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (!(username, password)) {
                alert("Please provide username or password")
            }

            //getting user from storage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            
            //checking credintials

            if ((username, password) !== storedUser) {
                localStorage.setItem("LoggedIn", true)
                alert("Login successfull")
                window.location.href = './App/debate.html'
            }

    })
}