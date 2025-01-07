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
// Redirect unauthenticated users to the login page
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = '/index.html'; // Redirect to login page
}

// Logout functionality
const logoutButtons = document.querySelectorAll('#logout, #logout-sidebar');
logoutButtons.forEach(button => {
    button.addEventListener('click', () => {
        sessionStorage.removeItem('loggedIn'); // Clear session
        window.location.href = '/index.html'; // Redirect to login page
    });
});

// Toggle Profile Form
function toggleProfile() {
    const profileForm = document.getElementById('profile-form');
    profileForm.style.display = profileForm.style.display === 'none' ? 'block' : 'none';
}

// Toggle Dropdown Menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        dropdownContent.classList.remove('show');
    }
});
