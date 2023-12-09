// document.addEventListener('DOMContentLoaded', function() {
//     let credentials = document.getElementById('credentials');
//     let yesButton = document.getElementById('yes');
//     let noButton = document.getElementById('no');
//     let refresh = document.getElementById('refresh-message')

//     yesButton.addEventListener('click', function() {
//         credentials.style.display = 'block';
//     });

//     noButton.addEventListener('click', function() {
//         window.open('https://apps.daysmartrecreation.com/dash/index.php?action=Auth/start&company=psa#/', '_blank');
//         refresh.style.display = 'block';
        
//     });
// });

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
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      // Handle error or display error message to the user
      console.error('Error:', error.message);
      // Example: Display error message on the frontend
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Login failed. Please check your credentials.';
      document.body.appendChild(errorMessage);
    });
  });
  