document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the 'show' class on the nav menu when the hamburger icon is clicked
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Optional: Close the menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    document.querySelectorAll('.hobby-img').forEach(img => {
        img.onclick = function() {
            document.getElementById('hobbyModal').style.display = 'flex';
            document.getElementById('modalImg').src = this.src;
        }
    });
    document.querySelector('.close').onclick = function() {
        document.getElementById('hobbyModal').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == document.getElementById('hobbyModal')) {
            document.getElementById('hobbyModal').style.display = 'none';
        }
    };
});

