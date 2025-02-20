import { countries } from "../data/data";
import CountryCard from "./CountryCard";

export default function ListCountry() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-10">
      {countries.map((country) => (
        <CountryCard key={country.title} country={country} />
      ))}
    </div>
  );
}
