document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarButtons = document.querySelector('.navbar-buttons');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        navbarButtons.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.navbar-link').forEach(n => n.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarButtons.classList.remove('active'); 
    }));

    // Handle responsiveness on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbarMenu.classList.remove('active');
            navbarButtons.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

JS (Optional)

// Get the video
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}