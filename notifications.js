document.addEventListener('DOMContentLoaded', () => {
        // Fungsi untuk memuat notifikasi dari file JSON
        fetch('notifications.json')
                .then(response => response.json())
                .then(data => {
                        // Iterasi melalui setiap notifikasi
                        data.notifications.forEach(notification => {
                                if (notification.type === "update") {
                                        showNotification(notification.message);
                                } else if (notification.type === "message") {
                                        showMessage(notification.message);
                                } else if (notification.type === "song") {
                                        showNotification(notification.message);
                                }
                        });
                });

        // Fungsi untuk menampilkan notifikasi update
        function showNotification(message) {
                const notificationPopup = document.getElementById('notification-popup');
                const notificationMessage = document.getElementById('notification-message');

                notificationMessage.textContent = message;
                notificationPopup.classList.add('show');

                document.querySelector('.close-notification').addEventListener('click', () => {
                        notificationPopup.classList.remove('show');
                });

                document.getElementById('enable-notifications').addEventListener('click', () => {
                        // Logika untuk mengaktifkan notifikasi browser
                        alert('Notifikasi diaktifkan!');
                        notificationPopup.classList.remove('show');
                });
        }

        // Fungsi untuk menampilkan notifikasi pesan
        function showMessage(message) {
                const messagePopup = document.getElementById('message-popup');
                const messageContent = messagePopup.querySelector('.message-content p');

                messageContent.textContent = message;
                messagePopup.classList.add('show');

                document.querySelector('.close-message').addEventListener('click', () => {
                        messagePopup.classList.remove('show');
                });
        }
});


if (Notification.permission === "granted") {
        new Notification("Pembaruan Baru!", { body: message });
} else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                        new Notification("Pembaruan Baru!", { body: message });
                }
        });
}