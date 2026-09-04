# 🌤️ Weather Forecast Application

A responsive Weather Forecast Application built using **React.js, Node.js, Express.js, and OpenWeatherMap API**. The application allows users to search for a city and view its current weather conditions along with a 5-day forecast.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature and weather conditions
* 💧 Show humidity and other weather details
* 🌬️ Display wind speed
* 📍 Show searched city and country
* 📅 5-day weather forecast
* ⏳ Loading state while fetching weather data
* ❌ Error handling for invalid or unavailable cities
* 🔐 API key protected through backend environment variables
* 📱 Responsive user interface

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* REST API
* JavaScript

### API

* OpenWeatherMap API

## 🏗️ Project Structure

```text
weather-forecast-app/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## 🔄 How It Works

1. User enters a city name in the React frontend.
2. The frontend sends a request to the Express backend.
3. The backend securely communicates with the OpenWeatherMap API.
4. The backend retrieves location, current weather, and forecast data.
5. The weather information is returned to the frontend.
6. React dynamically displays the weather information.

## 🔐 Environment Variables

The OpenWeatherMap API key is stored securely in an environment variable.

Create a `.env` file inside the `server` folder:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

**Note:** The `.env` file is not included in the GitHub repository for security reasons.

## ▶️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Unnati341/weather-forecast-app.git
```

### 2. Start the Backend

```bash
cd weather-forecast-app/server
npm install
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Start the Frontend

Open another terminal:

```bash
cd weather-forecast-app/client
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## 📡 API Endpoint

The backend provides the following endpoint:

```text
GET /api/weather?city=CityName
```

Example:

```text
http://localhost:5000/api/weather?city=Nagpur
```

## 📌 Project Highlights

This project demonstrates:

* External API integration
* Async/Await
* Backend API proxy
* Environment-based configuration
* REST API architecture
* Error and fallback handling
* Dynamic React UI updates
* Responsive frontend design

## 👩‍💻 Author

**Unnati Wankar**

GitHub: https://github.com/Unnati341
