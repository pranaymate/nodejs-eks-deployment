document.addEventListener('DOMContentLoaded', function() {
    // Existing window.onload functionality migrated to DOMContentLoaded
    fetch('http://localhost:3000/menu')
        .then(response => response.json())
        .then(data => {
            const menu = document.getElementById('menu');
            data.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.textContent = `${item.name} - $${item.price}`;
                menuItem.onclick = function() {
                    order.push({ itemId: item.id, itemName: item.name });
                    updateOrderView();
                };
                menu.appendChild(menuItem);
            });
        });

    // Add gallery image click event listeners
    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', function() {
            // Simple lightbox effect
            const largeImage = document.createElement('img');
            largeImage.src = this.src;
            largeImage.style.display = 'block';
            largeImage.style.width = '100%';
            largeImage.style.position = 'fixed';
            largeImage.style.top = '0';
            largeImage.style.left = '0';
            largeImage.style.height = '100vh';
            largeImage.style.objectFit = 'contain';
            largeImage.style.backgroundColor = 'rgba(0,0,0,0.5)';
            largeImage.onclick = function() {
                document.body.removeChild(largeImage);
            };
            document.body.appendChild(largeImage);
        });
    });
});
