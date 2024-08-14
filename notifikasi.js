document.addEventListener('DOMContentLoaded', function() {
        fetch('notifications.json')
                .then(response => response.json())
                .then(notifications => {
                        const now = new Date();
                        notifications.forEach(notification => {
                                const notifDate = new Date(notification.date);
                                if (notifDate <= now) {
                                        showNotification(notification);
                                }
                        });
                })
                .catch(error => console.error('Error fetching notifications:', error));
});

function showNotification(notification) {
        const notifElement = document.getElementById('notification');
        const messageElement = document.getElementById('notification-message');
        const closeElement = document.getElementById('notification-close');

        messageElement.textContent = notification.message;
        notifElement.style.display = 'block';

        closeElement.onclick = function() {
                notifElement.style.display = 'none';
        };

        setTimeout(() => {
                notifElement.style.display = 'none';
        }, 10000); // Hide notification after 10 seconds
}