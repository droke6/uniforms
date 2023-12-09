const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port number
const db = mysql.createConnection({
  host: Dannys-Air.lan, // Your MySQL host
  user: Droke,
  password: Droke7741!,
  database: Credentials,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public')); // Assuming your HTML file is in the 'public' folder

// Handle login POST request
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check the database for the provided credentials
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      throw err;
    }

    if (result.length > 0) {
      res.status(200).send('Login successful'); // You can send a success message or redirect to a new page here
    } else {
      res.status(401).send('Invalid credentials'); // Unauthorized status code for incorrect credentials
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
