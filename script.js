document.addEventListener('DOMContentLoaded', () => {
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
            const audioId = button.getAttribute('data-audio');
            const audioElement = document.getElementById(audioId);

            // Pause all other audio elements
            document.querySelectorAll('audio').forEach(audio => {
                if (audio !== audioElement) {
                    audio.pause();
                    // Reset button text for other audio elements
                    const otherButton = document.querySelector(`button[data-audio="${audio.id}"]`);
                    if (otherButton) {
                        otherButton.classList.remove('playing');
                        otherButton.innerHTML = '<i class="fas fa-play"></i> Play';
                    }
                }
            });

            // Toggle play/pause for the selected audio
            if (audioElement.paused) {
                audioElement.play();
                button.classList.add('playing');
                button.innerHTML = '<i class="fas fa-pause"></i> Pause';
            } else {
                audioElement.pause();
                button.classList.remove('playing');
                button.innerHTML = '<i class="fas fa-play"></i> Play';
            }
        });
    });
});