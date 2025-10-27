import { useState, useMemo } from "react";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import "./Home.css";

export default function Home() {
  const { countries, loading, error } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries;

    return countries.filter((country) => {
      const searchLower = searchQuery.toLowerCase();
      const name = country.name.common.toLowerCase();
      const capital = country.capital?.[0]?.toLowerCase() || "";

      return name.includes(searchLower) || capital.includes(searchLower);
    });
  }, [countries, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const currentCountries = filteredCountries.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  const handleSearchChange = (value) => {
    setSearchQuery(value);
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

      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      <div className="results-info">
        Showing {currentCountries.length} of {filteredCountries.length}{" "}
        countries
      </div>

      {currentCountries.length === 0 ? (
        <div className="no-results">
          <p>No countries found matching "{searchQuery}"</p>
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
