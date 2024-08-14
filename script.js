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

// Play/Pause Functionality for Songs
const playPauseButtons = document.querySelectorAll('.play-pause');
const allAudios = document.querySelectorAll('audio');

playPauseButtons.forEach(button => {
        button.addEventListener('click', () => {
                const songId = button.getAttribute('data-song');
                const audioElement = document.getElementById(songId);

                // Pause any currently playing audio
                allAudios.forEach(audio => {
                        if (audio !== audioElement) {
                                audio.pause();
                                audio.currentTime = 0;
                                const otherButton = document.querySelector(`button[data-song="${audio.id}"]`);
                                otherButton.textContent = 'Play';
                                otherButton.parentElement.classList.remove('playing');
                        }
                });

                // Toggle play/pause for the clicked button's audio
                if (audioElement.paused) {
                        audioElement.play();
                        button.textContent = 'Pause';
                        button.parentElement.classList.add('playing');
                } else {
                        audioElement.pause();
                        button.textContent = 'Play';
                        button.parentElement.classList.remove('playing');
                }
        });
});

// Category Selection for Song Preview
const categoryButtons = document.querySelectorAll('.category-btn');
const songLists = document.querySelectorAll('.song-list ul');

categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                // Show the selected category's song list and hide others
                songLists.forEach(list => {
                        if (list.getAttribute('data-category') === category) {
                                list.classList.add('active');
                        } else {
                                list.classList.remove('active');
                        }
                });

                // Reset all play buttons and stop any playing audio
                playPauseButtons.forEach(btn => {
                        btn.textContent = 'Play';
                        btn.parentElement.classList.remove('playing');
                });
                allAudios.forEach(audio => {
                        audio.pause();
                        audio.currentTime = 0;
                });
        });
});