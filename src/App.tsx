import { useEffect, useState } from "react";
import Container from "./components/Container";
import Dropdown from "./components/Dropdown";
import ListCountry from "./components/ListCountry";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearcBar";
import { countries } from "./data/data";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }

    setDarkMode(savedMode === "dark" ? true : false);
  }, []);

  console.log(darkMode);

  const toggleDisplay = () => {
    setDarkMode((prevDark) => !prevDark);
    console.log(darkMode);
    localStorage.setItem("displayMode", darkMode ? "dark" : "light");
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1 className="text-4xl dark">tes</h1>
      <button onClick={toggleDisplay} className="border p-4 text-3x">
        {darkMode ? "set To Light" : "set to dark"}
      </button>
      <NavigationBar />
      <Container>
        <div className="flex justify-between items-center mb-10 bg-neutral-200 dark:bg-neutral-900">
          <SearchBar />
          <Dropdown />
        </div>
        <ListCountry />
      </Container>
    </div>
  );
}
