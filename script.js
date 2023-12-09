document.addEventListener('DOMContentLoaded', function() {
    let new_account = document.getElementById('new-account-button');

    new_account.addEventListener('click', function() {
        window.open('https://apps.daysmartrecreation.com/dash/index.php?action=Auth/start&company=psa#/', '_blank');
    });

});

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Sending login credentials to the backend /login endpoint using fetch
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      // Process backend response here
      // For example, if the response contains a JWT token
      const token = data.token; // Assuming the response contains a 'token' field
  
      // Store token in local storage for subsequent requests
      localStorage.setItem('token', token);
  
      // Redirect or display user information upon successful login
      // Replace 'dashboard.html' with your desired authenticated area
      window.location.href = 'sample.html';
    })
    .catch(error => {
      // Handle error or display error message to the user
      console.error('Error:', error.message);
      // Example: Display error message on the frontend
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Login failed. Please check your credentials and try again.';
      document.body.appendChild(errorMessage);
    });
  });


  // Connect the login function to the login button click event
  document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Trigger form submission when login button is clicked
    document.getElementById('loginForm').submit();
  });
  