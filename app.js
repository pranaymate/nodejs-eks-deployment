const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Menu items database simulation
const menuItems = [
    { id: 1, name: 'Burger', price: 8.99 },
    { id: 2, name: 'Pizza', price: 15.99 },
    { id: 3, name: 'Salad', price: 6.99 }
];

// Orders storage
const orders = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Get menu items
app.get('/menu', (req, res) => {
    res.json(menuItems);
});

// Post an order
app.post('/order', (req, res) => {
    const order = req.body;
    order.id = orders.length + 1; // Simple ID assignment
    orders.push(order);
    res.status(201).send(order);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
