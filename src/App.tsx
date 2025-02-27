import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export default function () {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:slug" element={<CountryDetail />} />
      </Routes>
    </HelmetProvider>
  );
}
