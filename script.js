// Switching between login and register forms
document.getElementById("show-register").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function () {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});
function toggleMenu() {
    const menu = document.getElementById('menu-content');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
