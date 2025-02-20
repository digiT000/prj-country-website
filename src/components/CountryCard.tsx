import { CountryProp } from "../interface/interface";
import CountryItem from "./CountryItem";
interface CardProp {
  country: CountryProp;
}

export default function CountryCard({ country }: CardProp) {
  return (
    <a
      href="#"
      className="bg-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden h-fit"
    >
      <img
        src={country.image}
        alt={`image - ${country.title}`}
        className="w-full border-b border-b-neutral-100  h-full max-h-[200px]"
      />
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-lg font-extrabold">{country.title}</h2>
        <div className="flex flex-col gap-2">
          <CountryItem label="Populations" value={country.population} />
          <CountryItem label="Region" value={country.region} />
          <CountryItem label="Capital" value={country.capital} />
        </div>
      </div>
    </a>
  );
}
