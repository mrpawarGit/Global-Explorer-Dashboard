# Global Explorer Dashboard

An interactive React web application that allows users to explore countries worldwide, view detailed information, weather conditions, and local news from multiple external APIs.

## 🎯 Overview

Global Explorer Dashboard is a modern, responsive web application built with React that provides comprehensive information about 250+ countries. Users can search, filter, and explore countries with real-time weather data and local news integration.

## ✨ Features

### Current Features
- ✅ **Country Explorer**: Browse through 250+ countries with pagination
- ✅ **Smart Search**: Search countries by name or capital city
- ✅ **Responsive Grid Layout**: Adapts seamlessly to all screen sizes
- ✅ **Country Cards**: Display flag, name, capital, region, and population
- ✅ **Pagination**: Smart pagination with ellipsis for better UX
- ✅ **Loading States**: Smooth loading indicators
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Click Navigation**: Click on any country to view details

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Styling**: CSS3 (Custom styling)
- **State Management**: React Hooks (useState, useEffect, useMemo)

## 🌐 APIs Used

1. **REST Countries API** - Country information
   - Endpoint: `https://restcountries.com/v3.1/region/{region}`
   - Provides: Names, flags, capitals, populations, languages, currencies

2. **OpenWeatherMap API** (Coming Soon)
   - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
   - Provides: Current weather, temperature, conditions

3. **NewsAPI** (Coming Soon)
   - Endpoint: `https://newsapi.org/v2/top-headlines`
   - Provides: Latest news headlines by country

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrpawarGit/Global-Explorer-Dashboard
   cd global-explorer-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   VITE_NEWS_API_KEY=your_newsapi_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
global-explorer-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── CountryCard.jsx          # Country card component
│   │   ├── CountryCard.css
│   │   ├── SearchBar.jsx            # Search input component
│   │   ├── SearchBar.css
│   │   ├── Pagination.jsx           # Pagination controls
│   │   ├── Pagination.css
│   │   ├── Spinner.jsx              # Loading spinner
│   │   ├── ErrorMessage.jsx         # Error display
│   │   └── Navbar.jsx               # Navigation bar
│   ├── pages/
│   │   ├── Home.jsx                 # Main explorer page
│   │   ├── Home.css
│   │   ├── CountryDetails.jsx       # Country details (coming soon)
│   │   └── Favorites.jsx            # Favorites page (coming soon)
│   ├── services/
│   │   ├── countriesAPI.js          # Countries API service
│   │   ├── weatherAPI.js            # Weather API service (coming soon)
│   │   └── newsAPI.js               # News API service (coming soon)
│   ├── hooks/
│   │   ├── useCountries.js          # Custom hook for countries
│   │   └── useFavorites.js          # Custom hook for favorites
│   ├── App.jsx                      # Main app component
│   ├── App.css
│   ├── main.jsx                     # Entry point
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Usage

### Search Countries
Type in the search bar to filter countries by name or capital city.

### Navigate Pages
Use pagination controls at the bottom to browse through countries.

### View Country Details
Click on any country card to view detailed information (coming soon).

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
```

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for country data
- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [NewsAPI](https://newsapi.org/) for news headlines
- [Flagcdn](https://flagcdn.com/) for country flags
- React community for amazing tools and libraries

## 👤 Author

**Your Name**
- GitHub: [@mrpawarGit](https://github.com/mrpawarGit)

***

**Made using React and Vite**
