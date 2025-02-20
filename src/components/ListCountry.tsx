import CountryCard from "./CountryCard";
import { CountryInterface } from "../interface/interface";
import searchDark from "../assets/search-dark.svg";
import searchLight from "../assets/search-light.svg";
import { ThemeSwitcherContext } from "../context/ThemeSwitcher";

interface ListCountryProp {
  country: CountryInterface[];
}

export default function ListCountry({ country }: ListCountryProp) {
  const { isDarkMode } = ThemeSwitcherContext();

  if (country.length === 0) {
    return (
      <div className="w-screen flex flex-col items-center justify-center p-10">
        <img
          className="w-56 h-auto object-cover mb-12"
          src={isDarkMode ? searchDark : searchLight}
        />
        <h3 className="text-2xl text-mainDark dark:text-white mb-2 font-bold">
          We cannot find the country
        </h3>
        <p className="text-sm text-mainDark dark:text-white font-light">
          Please check your search keywords
        </p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-10 px-4">
        {country.map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))}
      </div>
    );
  }
}
