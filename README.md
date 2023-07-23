# Node.js CRUD REST API - Posts

This is a simple CRUD (Create, Read, Update, Delete) REST API for managing posts. It allows you to perform basic operations on posts such as creating, fetching, updating, and deleting.

## Prerequisites

- Node.js and npm installed on your machine
- MySQL database with the required configuration

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alonzojoe/node-rest-api.git

2. Navigate to the project directory:

   cd node-rest-api

3. Install the dependencies:

  npm install

4. Rename .envexample to .env and fill in your configuration details:

  mv .envexample .env

Configuration

In the .env file, replace the placeholders with your specific configuration:

PORT=YOUR_PORT
DB_HOST=YOUR_DATABASE_HOST
DB_USERNAME=YOUR_DATABASE_USERNAME
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_DATABASE=YOUR_DATABASE_NAME


Database Setup

Create the necessary database and tables by running the SQL script located at ./db/schema.sql. You can do this using a MySQL client or a database administration tool like phpMyAdmin.

Usage

1. Start the server:
   
   node index.js

2. The server will be running at http://localhost:YOUR_PORT.

3. You can now use your favorite API client (e.g., Postman) to interact with the endpoints.

API Endpoints

• GET /api/v1/posts: Get all posts
• GET /api/v1/posts/:id: Get a specific post by ID
• POST /api/v1/posts/create: Create a new post
• PUT /api/v1/posts/:id: Update an existing post
• DELETE /api/v1/posts/:id: Delete a post by ID

Contributing
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or create a pull request.
