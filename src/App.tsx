import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./components/Container";
import Dropdown from "./components/Dropdown";
import ListCountry from "./components/ListCountry";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearcBar";
import { ThemeSwitcherContext } from "./context/ThemeSwitcher";
import { CountryInterface } from "./interface/interface";
import CountrySkeleton from "./components/ListCountry.skeleton";

const dropdownItems = ["Africa", "America", "Asia", "Europe", "Oceania"];
export default function App() {
  const initialRender = useRef<boolean>(true);
  const { isDarkMode } = ThemeSwitcherContext();
  const [search, setSearch] = useState<string>("");
  const [listCountry, setListCountry] = useState<CountryInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectFilter, setSelectedFilter] = useState<string | null>(null);

  function handleSearchInputChange(value: string) {
    setSearch(value); // Update the visual input immediately
  }

  async function fetchAllCountries() {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const countryData = await response.json();
      setListCountry(countryData);
    } catch (error) {
      setListCountry([]);
    } finally {
      setIsLoading(false);
    }
  }
  const handleFetchSearch = async (search: string) => {
    try {
      setIsLoading(true); // Set loading to true *before* fetching
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${search}?fields=name,capital,region,flags,population`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const searchResult = await response.json();
      setListCountry(searchResult);
    } catch (error) {
      setListCountry([]);
    } finally {
      setIsLoading(false); // Set loading to false *after* fetching (success or error)
    }
  }; // Add handleFetchSearch to dependency array

  useEffect(() => {
    if (initialRender.current) {
      fetchAllCountries(); // Fetch all countries on initial render
      initialRender.current = false;
    }
  }, []); // Empty dependency array: fetch all countries only once

  useEffect(() => {
    if (!search && !initialRender.current) {
      fetchAllCountries();
      // If search is empty, reset to all countries (or handle as needed)
      return;
    }

    const timeout = setTimeout(() => {
      if (search) {
        handleFetchSearch(search);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]); // Add fetchAllCountries to the dependency array
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavigationBar />
      <Container>
        <div className="flex flex-col gap-3 mb-8 md:justify-between md:flex-row md:items-center md:mb-10 px-4">
          <SearchBar value={search} setValue={handleSearchInputChange} />
          <Dropdown
            label="Filter by region"
            option={dropdownItems}
            setSelected={setSelectedFilter}
            selected={selectFilter as string}
          />
        </div>
        {isLoading ? (
          <CountrySkeleton length={9} />
        ) : (
          <ListCountry country={listCountry} />
        )}
      </Container>
    </div>
  );
}
