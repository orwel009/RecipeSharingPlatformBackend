# Recipe Sharing Platform Backend

This is the backend API for the Recipe Sharing Platform built with **Node.js**, **Express.js**, and **MongoDB**.  
It provides endpoints for user authentication and recipe management.

---

## Table of Contents

- [Technologies](#technologies)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)

---

## Technologies

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing
- CORS
- dotenv

---

## Features

- User registration and login with JWT authentication  
- CRUD operations for recipes (Create, Read, Update, Delete)  
- Owner-based authorization for editing/deleting recipes  
- Fetch recipes by authenticated user (`/recipes/my`)  
- Error handling and status codes for client feedback  

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas cluster)  
- npm or yarn

### Installation

```bash
git clone https://github.com/orwel009/RecipeSharingPlatformBackend.git
cd RecipeSharingPlatformBackend

npm install
```

### Environment Variables
Create a .env file in the root directory:
```bash
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret key>
PORT=5000
```

### Running the Server
```bash
npm run dev
```

# Default: http://localhost:5000