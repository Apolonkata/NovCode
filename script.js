// Switching between login and register forms
document.getElementById("show-register").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function () {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

// Handle Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Mock login validation
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "/home.html";
    } else {
        alert("Invalid credentials!");
    }
});

// Handle Register Form Submission
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (email && username && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Registration successful! Please log in.");
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    } else {
        alert("Please fill in all fields!");
    }
});

// Redirect unauthenticated users from Home page
if (window.location.pathname === "/home.html") {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "/index.html";
    }
}

// Logout functionality
const logoutButtons = document.querySelectorAll("#logout");
logoutButtons.forEach(button => {
    button.addEventListener("click", () => {
        sessionStorage.removeItem("loggedIn");
        window.location.href = "/index.html";
    });
});
