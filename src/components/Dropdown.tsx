import { useState } from "react";

interface DropdownProps {
  label: string;
  option: string[];
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  selected: string;
}

export default function Dropdown({
  label,
  option,
  setSelected,
  selected,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSetSelected = (selected: string) => {
    setSelected(selected);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-sm min-w-[150px] flex items-center justify-between gap-2 px-3 py-3 shadow-2xs rounded-lg bg-white hover:bg-neutral-200 dark:bg-mainDark dark:hover:bg-neutral-800 text-mainDark dark:text-white cursor-pointer"
      >
        {selected ? selected : label}
        <svg
          width={24}
          height={24}
          className="fill-mainDark dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
        </svg>
      </button>
      <ul
        className={`absolute ${
          isOpen ? "block" : "hidden"
        } bg-white dark:bg-mainDark text-mainDark dark:text-white mt-1 rounded-lg w-full z-50 shadow-2xl`}
      >
        {option.map((item, index) => (
          <li
            role="listitem"
            onClick={() => handleSetSelected(item)}
            key={index}
            className="hover:bg-gray-200 hover:dark:bg-neutral-800 py-2 px-4 cursor-pointer text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
