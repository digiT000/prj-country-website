import { countries } from "../data/data";
import CountryCard from "./CountryCard";
import { CountryInterface } from "../interface/interface";

interface ListCountryProp {
  country: CountryInterface[];
}

export default function ListCountry({ country }: ListCountryProp) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-10 px-4">
      {country.map((country) => (
        <CountryCard key={country.title} country={country} />
      ))}
    </div>
  );
}
