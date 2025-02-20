import lightMode from "../assets/light-mode.svg";
import darkMode from "../assets/dark-mode.svg";
import { ThemeSwitcherContext } from "../context/ThemeSwitcher";

export default function NavigationBar() {
  const { isDarkMode, toggle } = ThemeSwitcherContext();
  return (
    <header className="font-nunito px-2 shadow-2xs bg-white dark:bg-mainDark transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
          Where in the world?
        </h1>
        <button
          onClick={toggle}
          className="p-2 text-neutral-900 flex items-center gap-2 font-semibold cursor-pointer dark:text-white"
        >
          <img className="w-6 h-6" src={isDarkMode ? darkMode : lightMode} />
          {isDarkMode ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
}
