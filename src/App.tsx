import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:slug" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}
