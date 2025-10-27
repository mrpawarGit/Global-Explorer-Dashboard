# 🌍 Global Explorer Dashboard

An interactive React web application that allows users to explore countries worldwide, view detailed information, real-time weather conditions, and local news from multiple external APIs.

## 🌐 Live - [Global Explorer Dashboard](https://global-explorer-dashboard.vercel.app/)

## 🎯 Overview

Global Explorer Dashboard is a modern, responsive web application built with React that provides comprehensive information about 250+ countries. Users can search, filter, and explore countries with real-time weather data, interactive maps, and local news integration.

## ✨ Features

### ✅ Current Features
- **Country Explorer**: Browse through 250+ countries with smart pagination
- **Advanced Search**: Search countries by name or capital city with real-time filtering
- **Responsive Grid Layout**: Adapts seamlessly to all screen sizes (mobile, tablet, desktop)
- **Country Cards**: Display flag, name, capital, region, and population
- **Detailed Country View**: 
  - Large flag display with official country name
  - General information (capital, region, subregion, population, area)
  - Languages and currencies with symbols
  - Border countries display
  - Interactive map with location markers
- **Real-Time Weather**: Current weather conditions for capital cities
  - Temperature, weather conditions, and descriptions
  - Wind speed, humidity, and "feels like" temperature
  - Weather icons from OpenWeatherMap
- **Latest News**: Top 3 news headlines from each country
  - Article images, titles, and descriptions
  - Direct links to full articles
- **Interactive Map**: Leaflet-powered maps showing country location
- **Smart Pagination**: Pagination with ellipsis for better navigation
- **Loading States**: Smooth loading indicators for all API calls
- **Error Handling**: User-friendly error messages with retry options
- **Back Navigation**: Easy navigation between pages


## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Maps**: React Leaflet + Leaflet.js
- **Styling**: CSS3 (Custom styling with CSS Grid & Flexbox)
- **State Management**: React Hooks (useState, useEffect, useMemo)

## 🌐 APIs Used

1. **REST Countries API** - Country information
   - Endpoint: `https://restcountries.com/v3.1/region/{region}`
   - Data: Names, flags, capitals, populations, languages, currencies, borders, coordinates
   - Status: ✅ Active

2. **OpenWeatherMap API** - Real-time weather data
   - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
   - Data: Temperature, conditions, humidity, wind speed
   - Status: ✅ Integrated

3. **NewsAPI** - Latest news headlines
   - Endpoint: `https://newsapi.org/v2/top-headlines`
   - Data: Top 3 headlines with images and links
   - Status: ✅ Integrated

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)
- NewsAPI key (free tier: 100 requests/day)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrpawarGit/Global-Explorer-Dashboard
   cd global-explorer-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get API Keys**
   - OpenWeatherMap: [Sign up here](https://openweathermap.org/api)
   - NewsAPI: [Register here](https://newsapi.org/register)

4. **Create environment file**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   VITE_NEWS_API_KEY=your_newsapi_key_here
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   
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
│   │   ├── WeatherCard.jsx          # Weather display component
│   │   ├── WeatherCard.css
│   │   ├── NewsCard.jsx             # News headlines component
│   │   ├── NewsCard.css
│   │   ├── CountryMap.jsx           # Interactive map component
│   │   ├── CountryMap.css
│   │   ├── Spinner.jsx              # Loading spinner
│   │   ├── ErrorMessage.jsx         # Error display
│   │   └── Navbar.jsx               # Navigation bar
│   ├── pages/
│   │   ├── Home.jsx                 # Main explorer page
│   │   ├── Home.css
│   │   ├── CountryDetails.jsx       # Detailed country view
│   │   ├── CountryDetails.css
│   │   └── Favorites.jsx            # Favorites page (coming soon)
│   ├── services/
│   │   ├── countriesAPI.js          # Countries API service
│   │   ├── weatherAPI.js            # Weather API service
│   │   └── newsAPI.js               # News API service
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
Type in the search bar to instantly filter countries by name or capital city.

### Browse Countries
Use pagination controls at the bottom to navigate through all 250+ countries.

### View Country Details
Click on any country card to view:
- Complete country information
- Real-time weather for the capital
- Latest news headlines
- Interactive map with location

### Navigate Back
Use the back button or browser navigation to return to the home page.

## 📜 Available Scripts

```bash
npm run dev          # Start development server at localhost:5173
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```

## 🎨 Key Features Explained

### Smart API Integration
- Fetches data from 5 regions in parallel for optimal performance
- Graceful error handling for all API calls
- Caching strategy to minimize redundant requests

### Responsive Design
- Mobile-first approach
- CSS Grid for flexible layouts
- Adapts to all screen sizes (320px - 4K)

### Performance Optimization
- React.lazy for code splitting
- useMemo for expensive computations
- Lazy loading for images
- Optimized re-renders

## 🐛 Known Issues

- NewsAPI free tier has 100 requests/day limit
- Some countries may not have news available in NewsAPI
- Weather data requires valid capital city names

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for comprehensive country data
- [OpenWeatherMap](https://openweathermap.org/) for real-time weather information
- [NewsAPI](https://newsapi.org/) for news headlines
- [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/) for interactive maps
- [Flagcdn](https://flagcdn.com/) for high-quality country flags
- React and Vite communities for excellent tools and documentation

## 👤 Author

**Your Name**
- GitHub: [@mrpawarGit](https://github.com/mrpawarGit)

***

**Made using React and Vite**
