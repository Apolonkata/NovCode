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
function toggleMenu() {
    const menu = document.getElementById('menu-content');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const profilePic = document.getElementById('profile-pic').files[0];
    const bio = document.getElementById('bio').value;

    if (profilePic) {
        console.log(`Uploaded picture: ${profilePic.name}`);
    }
    if (bio) {
        console.log(`Bio: ${bio}`);
    }

    alert('Profile updated!');
});
function toggleProfile() {
    const profileForm = document.getElementById('profile-form');
    // Toggle visibility of the profile customization form
    profileForm.style.display = profileForm.style.display === 'block' ? 'none' : 'block';
}
