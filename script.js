let order = [];

window.onload = function() {
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
};

function updateOrderView() {
    const orderDiv = document.getElementById('order');
    orderDiv.innerHTML = '';
    order.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.textContent = item.itemName;
        orderDiv.appendChild(orderItem);
    });
}

function submitOrder() {
    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        alert('Order placed!');
        order = [];
        updateOrderView();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
