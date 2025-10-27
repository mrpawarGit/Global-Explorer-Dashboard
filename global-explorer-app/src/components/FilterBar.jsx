import "./FilterBar.css";

export default function FilterBar({
  selectedRegion,
  onRegionChange,
  sortBy,
  onSortChange,
}) {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "population-desc", label: "Population (High to Low)" },
    { value: "population-asc", label: "Population (Low to High)" },
    { value: "area-desc", label: "Area (Largest)" },
    { value: "area-asc", label: "Area (Smallest)" },
  ];

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="region-filter">Filter by Region:</label>
        <select
          id="region-filter"
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
          className="filter-select"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="filter-select"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
