# Smart Event Management System

A full-stack web application to manage and explore events, built with **React** (frontend) and **Flask** (backend).

---

## 🔹 Features

- Explore events (Workshops, Seminars, Hackathons, Cultural programs)
- User registration and login
- Book seats for events
- Dashboard showing upcoming events and personalized recommendations
- Analytics dashboard with charts showing participation trends

---

## 🗂 Project Structure

wpassignment/
├─ backend/ # Flask backend
│ ├─ app.py # Main backend app
│ └─ venv/ # Python virtual environment (ignored in Git)
│
├─ frontend/ # React frontend
│ ├─ package.json # NPM dependencies
│ ├─ src/
│ │ ├─ App.js
│ │ ├─ index.js
│ │ └─ components/
│ │ ├─ Explore.js
│ │ ├─ Login.js
│ │ ├─ Register.js
│ │ ├─ Dashboard.js
│ │ └─ Analytics.js
│ └─ node_modules/ # Ignored by Git
│
└─ .gitignore # Ignores venv, node_modules, logs, etc.


---

## ⚡ Installation

### Backend
```bash
cd backend
python -m venv venv
# Activate the virtual environment
# Windows:
.\venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate
pip install flask flask-cors
python app.py

🌐 Usage

Open React app at http://localhost:3000

Explore events and book seats

Use Login/Register for authentication

View analytics charts on Analytics page

