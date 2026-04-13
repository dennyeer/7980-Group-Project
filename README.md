# Travel Checkin App

A full-stack travel check-in application built with **React (Web)**, **Ionic Vue (Mobile-style App)**, **Node.js/Express**, and **Azure Cosmos DB for MongoDB**.

This project demonstrates a **multi-platform frontend architecture**, where both a web application and a mobile-style application interact with the same backend API.

---

## 🌐 System Overview

This project consists of three main parts:

### 1. Web Application (React)
- Location: `client/`
- Built with React and Vite
- Designed for desktop/browser usage
- Provides full functionality (CRUD + authentication)

### 2. Mobile-style Application (Ionic)
- Location: `ionic-client/`
- Built with Ionic Vue
- Simulates a mobile app interface
- Inspired by Ionic lab exercises
- Runs in browser using mobile layout (responsive UI)

### 3. Backend API (Node.js / Express)
- Location: `server/`
- RESTful API
- JWT authentication
- Connects to cloud database

---

## 🚀 Features

### Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes

### Check-in System
- Add travel check-ins
- View personal check-ins
- Filter check-ins by city
- Delete check-ins

### Profile
- View user information
- Change password
- Logout

### UI
- Responsive Web UI (React + Bootstrap)
- Mobile-style UI (Ionic Tabs)

---

## 🛠 Tech Stack

### Frontend
- React (Web)
- Ionic Vue (Mobile-style UI)
- Axios
- Bootstrap

### Backend
- Node.js
- Express
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

### Database
- Azure Cosmos DB (MongoDB API)

---

## 📁 Project Structure

```text
travel-checkin-app/
  client/           # React web frontend
  ionic-client/     # Ionic mobile-style frontend
  server/           # Express backend
  README.md
```
 ---

## ⚙️ How to Run the Project
1. Clone the repository
`git clone https://github.com/dennyeer/7980-Group-Project`

`cd travel-checkin-app`

---

## 🔧 Backend Setup
# Install dependencies
`cd server`

`npm install`

# Configure environment variables

Create a .env file in the server folder:

`PORT=5000`

`MONGO_URI=your_azure_mongodb_connection_string` 

`JWT_SECRET=travelappsecret123`

# Start backend server
`npm run dev`

Expected output:

`MongoDB connected`

`Server running on port 5000`

---

## 💻 Web Application (React)
`Install dependencies`

`cd client`

`npm install`

Start the app

`npm run dev`

Open in browser:

`http://localhost:5173`

---

## 📱 Mobile-style App (Ionic)
Install dependencies

`cd ionic-client`

`npm install`

Start the app

`npx @ionic/cli serve`

👉 Runs in browser with mobile-style layout

---

## 🔄 Typical User Flow
Register a new account
Login
View check-ins (Checkins tab)
Add a new check-in (Add tab)
Filter check-ins by city
Delete check-ins
View profile
Change password or logout

---

## 🔗 API Configuration

Frontend API base URL is defined in:

client/src/api.js
ionic-client/src/api.js

Default:

const API_BASE = 'http://localhost:5000/api';

---

## ☁️ Database
Uses Azure Cosmos DB (MongoDB API)
Supports local MongoDB by changing MONGO_URI

---

## 📌 Notes
Both frontends (React and Ionic) share the same backend API
Ionic version focuses on mobile-style UI demonstration
The system can be extended to support image uploads and cloud storage

---

## 📦 Submission Notes
node_modules folders are excluded
Run npm install before starting the project
This project demonstrates:
Full-stack development
RESTful API design
Authentication
Cloud database integration
Multi-platform frontend support

---

## 👨‍💻 Author
CHEN Ka Shing

Course: COMP7980

---

