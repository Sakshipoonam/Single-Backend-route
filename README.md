# Single-Backend-route
This is a simple Node.js Express backend with one route:
GET /users – Fetches all users from JSONPlaceholder.
GET /users/:username – Fetches a specific user by username.
We use axios to make HTTP requests to the JSONPlaceholder API.

setup instruction:-
step1:
Clone the repository to get started

step2: Setup (Node.js + Express)
Install Dependencies
npm init -y
npm install express axios

step3: To run this use
node index.js
Then visit:
http://localhost:3000/users – All users
http://localhost:3000/users?username=Bret - User with username
