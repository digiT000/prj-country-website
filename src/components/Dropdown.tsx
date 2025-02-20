export default function Dropdown() {
  return (
    <select className="bg-white px-3 py-3 text-sm shadow-2xs rounded-lg">
      <option value="0">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
