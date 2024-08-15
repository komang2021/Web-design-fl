console.log('Hello World!');

// Toggle Navbar Menu on Mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scroll to FL Studio Section
const flStudioBtn = document.getElementById("fl-studio");
if (flStudioBtn) {
    flStudioBtn.addEventListener("click", () => {
        flStudioBtn.scrollIntoView({ behavior: "smooth" });
    });
}

// Category button functionality
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.download-list > ul').forEach(list => {
            list.style.display = list.getAttribute('data-category') === category ? 'block' : 'none';
        });
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === category);
        });
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
        const modal = document.querySelector(modalId);
        if (modal) modal.style.display = 'block';
    });
});

// Tutup modal ketika pengguna mengklik tombol close
document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) modal.style.display = 'none';
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
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
};

document.getElementById('backToTopBtn')?.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Audio play/pause functionality
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio');
        let audio = button.audioInstance;
        
        if (!audio) {
            audio = new Audio(audioSrc);
            button.audioInstance = audio;
        }
        
        if (button.classList.contains('playing')) {
            audio.pause();
            button.classList.remove('playing');
            button.innerHTML = '<i class="fas fa-play"></i> Play';
        } else {
            audio.play();
            button.classList.add('playing');
            button.innerHTML = '<i class="fas fa-pause"></i> Pause';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
        var playButtons = document.querySelectorAll('.play-btn');

        playButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                        var audioId = this.getAttribute('data-audio');
                        var audioElement = document.getElementById(audioId);
                        audioElement.play(); // Langsung memutar audio
                });
        });
});