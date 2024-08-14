console.log('Hello World!');

// Toggle Navbar Menu on Mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
});

// Smooth Scroll to FL Studio Section
document.getElementById("fl-studio").addEventListener("click", function() {
        document.getElementById("fl-studio").scrollIntoView({ behavior: "smooth" });
});

// Category button functionality
document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                document.querySelectorAll('.download-list ul').forEach(list => {
                        list.style.display = 'none';
                });
                document.querySelector(`ul[data-category="${category}"]`).style.display = 'block';
        });
});

// Download button animation
document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', (e) => {
                e.preventDefault();

                const link = button.href;
                const icon = button.querySelector('i');

                // Add a spinning animation to the icon
                icon.classList.add('fa-spinner', 'fa-spin');
                icon.classList.remove('fa-download');

                setTimeout(() => {
                        window.open(link, '_blank');

                        // Reset the icon after download starts
                        icon.classList.remove('fa-spinner', 'fa-spin');
                        icon.classList.add('fa-download');
                }, 2000); // Delay to show the animation
        });
});