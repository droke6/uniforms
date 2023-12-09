const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const dbConfig = {
    host: Dannys-Air.lan,
    user: Droke,
    password: 'Droke7741!',
    database: CREDENTIALS
}
const pool = mysql.createPool(dbConfig);

function getUserByEmail(email, callback) {
    pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        return callback(err);
      }
      return callback(null, results[0]); // Assuming the email is unique, returning the first result
    });
  }

  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    getUserByEmail(email, (err, user) => {
      bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
        if (hashErr) {
          return res.status(500).json({ error: 'Hashing error' });
        }

      if (err) {
        // Handle database error
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!user) {
        // User not found in the database
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare hashed password from the database with the provided password using bcrypt
      // Check password validity and handle successful authentication
      // This part will involve password comparison using bcrypt, which is not detailed here
    });
  });

// Your existing getUserByEmail function remains unchanged

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare hashed password from the database with the provided password using bcrypt
    bcrypt.compare(password, user.password, (bcryptErr, result) => {
      if (bcryptErr) {
        return res.status(500).json({ error: 'Bcrypt error' });
      }

      if (result) {
        // Passwords match, user authenticated
        return res.status(200).json({ message: 'Login successful' });
      } else {
        // Passwords don't match
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
});
