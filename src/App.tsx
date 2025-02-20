import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "./components/Container";
import Dropdown from "./components/Dropdown";
import ListCountry from "./components/ListCountry";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearcBar";
import { ThemeSwitcherContext } from "./context/ThemeSwitcher";
import { CountryInterface } from "./interface/interface";
import CountrySkeleton from "./components/ListCountry.skeleton";
import debounce from "lodash.debounce";

const dropdownItems = [
  "All Region",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];
export default function App() {
  console.log("RENDERRR");
  const { isDarkMode } = ThemeSwitcherContext();
  const initialRender = useRef<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [listCountry, setListCountry] = useState<CountryInterface[]>([]); // ALL COUNTRY OR COUNTRY BASED ON REGION
  const [filteredCountry, setFilteredCountry] = useState<CountryInterface[]>(
    []
  );
  const [isError, setIsError] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectFilter, setSelectedFilter] = useState<string | null>(
    dropdownItems[0]
  );

  function handleSearchInputChange(value: string) {
    setSearch(value); // Update the visual input immediately
    debouncedSearch(value);
  }
  function hanelOnChangeFilter(value: string) {
    setSearch("");
    setSelectedFilter(value);
    handleFetchCountries(value);
  }

  const handleFetchCountries = useCallback(
    async (region: string | null = null) => {
      setIsError(false);
      setIsLoading(true);
      let url =
        "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population";
      if (region && region !== "All Region") {
        url = `https://restcountries.com/v3.1/region/${region.toLowerCase()}?fields=name,capital,region,flags,population`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const countryData = await response.json();
        setListCountry(countryData);
        setFilteredCountry(countryData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const debouncedSearch = useMemo(() => {
    return debounce((searchTerm: string) => {
      if (!searchTerm) {
        setFilteredCountry(listCountry); // Reset to region-filtered list
        return;
      }

      const filtered = listCountry.filter((country) => {
        const nameMatch =
          country.name.official
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
      });
      setFilteredCountry(filtered);
    }, 500);
  }, [listCountry]);

  // Use effect to initialfetching
  useEffect(() => {
    if (initialRender.current) {
      handleFetchCountries();
      initialRender.current = false;
    }
  }, []);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavigationBar />
      <Container>
        <div className="flex flex-col gap-3 mb-8 md:justify-between md:flex-row md:items-center md:mb-10 px-4">
          <SearchBar value={search} setValue={handleSearchInputChange} />
          <Dropdown
            label="Filter by region"
            option={dropdownItems}
            setSelected={hanelOnChangeFilter}
            selected={selectFilter as string}
          />
        </div>
        {isLoading ? (
          <CountrySkeleton length={9} />
        ) : (
          <ListCountry country={filteredCountry} />
        )}
      </Container>
    </div>
  );
}
