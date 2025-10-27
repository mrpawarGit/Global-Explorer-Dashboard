import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// List of all regions
const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

// Fetch all countries by combining all regions
export const getAllCountries = async () => {
  try {
    // Fetch all regions in parallel
    const promises = REGIONS.map((region) =>
      axios.get(`${BASE_URL}/region/${region}`)
    );

    const responses = await Promise.all(promises);

    // all countries from all regions
    const allCountries = responses.flatMap((response) => response.data);

    return allCountries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

// Fetch single country by name
export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching country details:", error);
    throw error;
  }
};

// Fetch countries by region
export const getCountriesByRegion = async (region) => {
  try {
    const response = await axios.get(`${BASE_URL}/region/${region}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries by region:", error);
    throw error;
  }
};
