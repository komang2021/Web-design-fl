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

// JavaScript untuk modal FAQ
document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.addEventListener('click', () => {
                const modalId = icon.getAttribute('data-target');
                document.querySelector(modalId).style.display = 'block';
        });
});

// Tutup modal ketika pengguna mengklik tombol close
document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
                closeBtn.parentElement.parentElement.style.display = 'none';
        });
});

// Tutup modal ketika pengguna mengklik di luar konten modal
window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
        }
});

// Back to Top Button Functionality
window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById('backToTopBtn').style.display = 'block';
        } else {
                document.getElementById('backToTopBtn').style.display = 'none';
        }
};

document.getElementById('backToTopBtn').addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
});



window.onload = function() {
        // Tampilkan pop-up setelah 5 detik
        setTimeout(function() {
                document.getElementById('promo-popup').style.display = 'block';
        }, 5000);

        // Fungsi untuk menutup pop-up
        document.querySelector('.close-popup').addEventListener('click', function() {
                document.getElementById('promo-popup').style.display = 'none';
        });

        // Fungsi untuk menangani aksi pada tombol CTA
        document.getElementById('cta-button').addEventListener('click', function() {
                window.location.href = 'https://www.example.com/shop';
        });
}