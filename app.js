const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Landing page route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Restaurant Ordering App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          h1 {
            color: #333;
          }
          p {
            margin-bottom: 10px;
          }
          .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Restaurant Ordering App</h1>
        <p>Start ordering delicious meals from our menu!</p>
        <a href="/menu" class="btn">Start Ordering</a>
      </body>
    </html>
  `);
});

// Menu page route (placeholder)
app.get('/menu', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Menu - Restaurant Ordering App</title>
        <!-- Add any additional styling or scripts here -->
      </head>
      <body>
        <h1>Menu</h1>
        <!-- Display menu items here -->
        <p>Placeholder for menu items...</p>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
