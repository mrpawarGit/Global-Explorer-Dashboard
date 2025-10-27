import { useState, useMemo } from "react";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import "./Home.css";

export default function Home() {
  const { countries, loading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  // Filter and sort countries
  const filteredAndSortedCountries = useMemo(() => {
    let result = [...countries];

    // Apply search filter
    if (searchQuery) {
      result = result.filter((country) => {
        const searchLower = searchQuery.toLowerCase();
        const name = country.name.common.toLowerCase();
        const capital = country.capital?.[0]?.toLowerCase() || "";

        return name.includes(searchLower) || capital.includes(searchLower);
      });
    }

    // Apply region filter
    if (selectedRegion !== "All") {
      result = result.filter((country) => country.region === selectedRegion);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.common.localeCompare(b.name.common);
        case "population-desc":
          return b.population - a.population;
        case "population-asc":
          return a.population - b.population;
        case "area-desc":
          return b.area - a.area;
        case "area-asc":
          return a.area - b.area;
        default:
          return 0;
      }
    });

    return result;
  }, [countries, searchQuery, selectedRegion, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredAndSortedCountries.length / countriesPerPage
  );
  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const currentCountries = filteredAndSortedCountries.slice(
    startIndex,
    endIndex
  );

  // Reset to page 1 when filters change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="home">
      <div className="home-header">
        <h1>Explore Countries</h1>
        <p>
          Discover information about {countries.length} countries around the
          world
        </p>
      </div>

      {/* Wrap search and filters in one container */}
      <div className="search-filter-container">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />

        <FilterBar
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
      </div>

      <div className="results-info">
        Showing {currentCountries.length} of {filteredAndSortedCountries.length}{" "}
        countries
        {selectedRegion !== "All" && ` in ${selectedRegion}`}
      </div>

      {currentCountries.length === 0 ? (
        <div className="no-results">
          <p>No countries found matching your criteria</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedRegion("All");
              setSortBy("name");
            }}
            className="reset-btn"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div className="countries-grid">
            {currentCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}
