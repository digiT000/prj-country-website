import { Link } from "react-router-dom";

interface ChipProp {
  label: string;
}
export default function Chip({ label }: ChipProp) {
  return (
    <Link
      to={`/country/${label}`}
      className="py-2 px-5 rounded-xs shadow-2xl text-sm font-light bg-white text-mainDark dark:bg-mainDark dark:text-white hover:bg-neutral-200 dark:hover:bg-secondaryDark"
    >
      {label}
    </Link>
  );
}
