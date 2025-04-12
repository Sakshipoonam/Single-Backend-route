const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Route to fetch all users or a specific user by username
app.get('/users', async (req, res) => {
  const username = req.query.username;

  try {
    // Fetch all users from JSONPlaceholder
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    if (username) {
      // Search for the user by username in a case-insensitive way
      const user = response.data.find(user => user.username.toLowerCase() === username.toLowerCase());

      if (user) {
        return res.json(user);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } else {
      // If no username is provided, return all users
      return res.json(response.data);
    }
  } catch (error) {
    // Handle any errors from the API request
    return res.status(500).json({ message: 'An error occurred while fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
