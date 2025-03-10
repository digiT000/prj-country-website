interface SearchBarProps {
  value: string;
  setValue: (e: string) => void;
}

export default function SearchBar({ setValue, value }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 dark:text-white text-mainDark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        value={value}
        type="text"
        className="pl-10 pr-6 py-3 text-sm max-w-[480px] w-full  shadow-2xs rounded-lg bg-white dark:bg-mainDark placeholder-neutral-500 text-mainDark dark:text-white"
        placeholder="Search for a country…"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
}
