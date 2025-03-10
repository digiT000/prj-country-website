import CountryItem from "./CountryItem";
import { CountryInterface } from "../interface/interface";
import { Link } from "react-router-dom";

interface CardProp {
  country: CountryInterface;
}

export default function CountryCard({ country }: CardProp) {
  return (
    <Link
      to={`/country/${country.name.common}`}
      className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden h-fit bg-white dark:bg-mainDark"
    >
      <img
        src={country.flags.svg}
        alt={`image - ${country.name.common}`}
        className="w-full border-b border-b-neutral-100  h-[200px] object-cover"
      />
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-lg font-extrabold text-mainDark dark:text-white">
          {country.name.common}
        </h2>
        <div className="flex flex-col gap-2">
          <CountryItem label="Populations" value={country.population} />
          <CountryItem label="Region" value={country.region} />
          <CountryItem label="Capital" value={country.capital} />
        </div>
      </div>
    </Link>
  );
}
