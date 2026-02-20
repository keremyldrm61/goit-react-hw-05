# 🎬 Movie Search Application

A modern React application built with Vite that allows users to discover trending movies, search for films, and explore detailed movie information using The Movie Database (TMDB) API.

---

## ✨ Features

### 🏠 Home Page

- 📈 Display today's trending and popular movies from TMDB
- 🎴 Visually appealing movie cards with posters and titles
- ⚡ Smooth navigation to movie details

### 🔍 Movie Search

- 🔎 Search movies by keyword with real-time results
- 🔗 URL-based search parameters persistence (useSearchParams)
- 🪄 Empty state handling and user-friendly feedback

### 📽️ Movie Details Page

- 📋 Comprehensive movie information (title, overview, rating, release date, genres)
- 🖼️ High-resolution movie poster display
- 🧭 Nested navigation for Cast and Reviews sections
- ↩️ Smart "Go Back" functionality preserving user navigation history

### 🎭 Cast Section

- 👥 Display main cast members with profile images
- 🎬 Character names and actor information
- 🤲 Graceful handling of missing data

### 💬 Reviews Section

- ⭐ User reviews and ratings
- ✍️ Author information and review content
- 📜 Scrollable content area for longer reviews

### 🧭 Navigation & Routing

- 📱 Responsive navigation menu with active state indicators
- 🪆 Nested routes for movie details subsections
- ❌ 404 Not Found page with redirect to home
- 🧩 Code splitting with React.lazy and Suspense for optimal performance

---

## 🛠️ Technologies Used

- ⚛️ React
- 🧭 React Router DOM v6
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🎨 CSS Modules
- 🌐 TMDB API
- 🌐 Axios (API Requests)

---

## 📁 Project Structure

    ├── src/
    │   ├── components/
    │   │   ├── App/
    │   │   │   ├── App.jsx
    │   │   │   └── App.module.css
    │   │   ├── MovieCast/
    │   │   │   ├── MovieCast.jsx
    │   │   │   └── MovieCast.module.css
    │   │   ├── MovieList/
    │   │   │   ├── MovieList.jsx
    │   │   │   └── MovieList.module.css
    │   │   ├── MovieReviews/
    │   │   │   ├── MovieReviews.jsx
    │   │   │   └── MovieReviews.module.css
    │   │   └── Navigation/
    │   │       ├── Navigation.jsx
    │   │       └── Navigation.module.css
    │   ├── pages/
    │   │   ├── HomePage/
    │   │   │   ├── HomePage.jsx
    │   │   │   └── HomePage.module.css
    │   │   ├── MovieDetailsPage/
    │   │   │   ├── MovieDetailsPage.jsx
    │   │   │   └── MovieDetailsPage.module.css
    │   │   ├── MoviesPage/
    │   │   │   ├── MoviesPage.jsx
    │   │   │   └── MoviesPage.module.css
    │   │   └── NotFoundPage/
    │   │       ├── NotFoundPage.jsx
    │   │       └── NotFoundPage.module.css
    │   ├── services/
    │   │   └── tmdb-api.js
    │   ├── index.css
    │   └── main.jsx

---

## 🗺️ Routes

| Path                       | Component          | Description                      |
| -------------------------- | ------------------ | -------------------------------- |
| `/`                        | `HomePage`         | Trending movies list             |
| `/movies`                  | `MoviesPage`       | Search movies by keyword         |
| `/movies/:movieId`         | `MovieDetailsPage` | Movie details with nested routes |
| `/movies/:movieId/cast`    | `MovieCast`        | Cast information (nested)        |
| `/movies/:movieId/reviews` | `MovieReviews`     | Reviews information (nested)     |
| `*`                        | `NotFoundPage`     | 404 fallback page                |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/goit-react-hw-05.git
cd goit-react-hw-05
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

### 4️⃣ Open in browser

    http://localhost:5173

---

## 🌍 Live Demo

👉 ...

---

## 📌 Project Purpose

This project was developed as part of the GoIT React Homework #5 assignment.\
Main learning goals:

- ✅ Component-based architecture
- ✅ React Router v6 with nested routes
- ✅ API integration with Axios
- ✅ State management with useState & useEffect
- ✅ URL parameters with useParams & useSearchParams
- ✅ Code splitting with React.lazy & Suspense
- ✅ CSS Modules for scoped styling
- ✅ Error and loading state handling
- ✅ Clean and maintainable code structure

---

## Author

**Kerem Yıldırım**  
🚀 React Development Project - Built with using React & TMDB API 🚀

---
