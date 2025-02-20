import { useEffect, useState } from "react";
import Container from "./components/Container";
import Dropdown from "./components/Dropdown";
import ListCountry from "./components/ListCountry";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearcBar";
import { ThemeSwitcherContext } from "./context/ThemeSwitcher";
import { CountryInterface } from "./interface/interface";

const dropdownItems = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function App() {
  const [listCountry, setListCountry] = useState<CountryInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectFilter, setSelectedFilter] = useState<string | null>(null);
  const { isDarkMode } = ThemeSwitcherContext();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
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
      }
    };

    fetchCountry();
  }, []);

  console.log(listCountry);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavigationBar />
      <Container>
        <div className="flex flex-col gap-3 mb-8 md:justify-between md:flex-row md:items-center md:mb-10 px-4">
          <SearchBar />
          <Dropdown
            label="Filter by region"
            option={dropdownItems}
            setSelected={setSelectedFilter}
            selected={selectFilter as string}
          />
        </div>
        {isLoading || <ListCountry country={listCountry} />}
      </Container>
    </div>
  );
}
