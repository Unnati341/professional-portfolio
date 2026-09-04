# Professional Portfolio Website

A professional and responsive portfolio website for showcasing my skills, education, projects, and software development profile.

## 🌐 Live Demo

**Portfolio:** https://professional-portfolio-1-k7j8.onrender.com

## 👩‍💻 About

I am an MCA graduate and aspiring Software Developer with a strong foundation in web development and programming. This portfolio presents my technical skills, academic background, projects, and contact information.

## 🚀 Features

* Professional and responsive portfolio design
* Dynamic profile information
* Skills displayed by category
* Project showcase with technologies used
* Education section
* Contact form
* Contact messages stored in MongoDB
* REST API integration
* Production deployment using Render
* MongoDB Atlas database integration

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* MongoDB Atlas

### Deployment

* Render

## 📂 Project Structure

```text
professional-portfolio/
│
├── client/
│   ├── assets/
│   │   ├── images/
│   │   └── resume/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
└── README.md
```

## 🔌 API Endpoints

```text
GET  /api/profile
GET  /api/skills
GET  /api/projects
GET  /api/education
POST /api/contact
```

## 📋 Projects Included

### Spotify Clone

A responsive music streaming web application inspired by Spotify with interactive music player functionality.

**Technologies:** HTML5, CSS3, JavaScript

### Zoom Clone

A real-time video conferencing web application supporting video/audio communication, room-based meetings, and messaging.

**Technologies:** React.js, Socket.io, Node.js, Express.js

### Wanderlust

A full-stack hotel and accommodation booking website with user authentication and REST APIs.

**Technologies:** Node.js, Express.js, MongoDB, Passport.js, bcrypt

**Live Demo:** https://airbnb-project-gfdz.onrender.com/listings

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Unnati341/professional-portfolio.git
cd professional-portfolio
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` folder and add your MongoDB connection string.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the backend

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

### 5. Run the frontend

Open the `client/index.html` file using VS Code Live Server or another local static server.

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 👤 Author

**Unnati Wankar**

* GitHub: https://github.com/Unnati341
* LinkedIn: https://www.linkedin.com/in/unnati-wankar/

## 📄 License

This project is created for portfolio and educational purposes.

