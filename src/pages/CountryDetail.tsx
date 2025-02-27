import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useCallback, useEffect, useMemo, useState } from "react";
import CountryItem from "../components/CountryItem";
import { CountryDetailProps } from "../interface/interface";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

import { ThemeSwitcherContext } from "../context/ThemeSwitcher";
import Chip from "../components/Chip";
import CountryDetailSkeleton from "../components/CountryDetail.skeleton";
import { Helmet } from "react-helmet-async";

export default function CountryDetail() {
  const { isDarkMode } = ThemeSwitcherContext();
  let { slug } = useParams();
  const [country, setCountry] = useState<CountryDetailProps | null>(null);
  const [borders, setBorders] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState("Detail Country");

  const countryKey = useMemo(() => {
    return country ? Object.keys(country.name.nativeName)[0] : null;
  }, [country]);
  const currencyKey = useMemo(() => {
    return country ? Object.keys(country.currencies)[0] : null;
  }, [country]);

  const fectDetailCountry = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${slug}?fullText=true&fields=name,capital,region,flags,population,subregion,currencies,languages,tld,borders`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const countryData = await response.json();
      setCountry(countryData[0]);
      setTitle(countryData[0].name.common);
    } catch (error) {
      setCountry(null);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  const fetchListBorder = useCallback(async (borders: string[]) => {
    const listBorder: string[] = [];
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders.join(
          ","
        )}&fields=name`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const countryData = await response.json();
      countryData.map((item: any) => {
        listBorder.push(item.name.common);
      });
      setBorders(listBorder);
    } catch (error) {
      setBorders([]);
    } finally {
    }
  }, []);

  useEffect(() => {
    if (!slug) return;
    fectDetailCountry();
  }, [slug, fectDetailCountry]);

  useEffect(() => {
    if (!country || country.borders.length === 0) return;
    fetchListBorder(country.borders);
  }, [country]);
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <title>{title}</title>
      </Helmet>
      <div className={isDarkMode ? "dark" : "light"}>
        <NavigationBar />
        <Container>
          <Link
            to={"/"}
            className="flex gap-2 items-center mb-10 hover:-translate-y-0.5 transition-all"
          >
            <svg
              className="w-5 h-5 fill-mainDark dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
            <p className="font-light dark:text-white text-mainDark">Back</p>
          </Link>
          {isLoading ? (
            <CountryDetailSkeleton />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 items-center">
              <img
                alt={`image of ${country?.name.common}`}
                src={country?.flags.svg}
                className="aspect-3/2 object-cover w-full rounded-2xl"
              />
              <div className="flex flex-col gap-10">
                <h1 className="text-3xl font-bold text-mainDark dark:text-white">
                  {country?.name.common}
                </h1>
                <div className="grid grid-cols-1  gap-10 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <CountryItem
                      label="Native Name"
                      value={
                        country?.name?.nativeName[countryKey as string]
                          ?.official
                      }
                    />
                    <CountryItem
                      label="Population"
                      value={country?.population}
                    />
                    <CountryItem label="Region" value={country?.region} />
                    <CountryItem
                      label="Sub Region"
                      value={country?.subregion}
                    />
                    <CountryItem label="Capital" value={country?.capital} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <CountryItem
                      label="Top Level Domain"
                      value={country?.tld[0]}
                    />
                    <CountryItem
                      label="Currencies"
                      value={`${
                        country?.currencies[currencyKey as string]?.name
                      } (${
                        country?.currencies[currencyKey as string]?.symbol
                      })`}
                    />
                    <CountryItem
                      label="Languages"
                      value={
                        country
                          ? Object.values(country?.languages as {}).join(", ")
                          : ""
                      }
                    />
                  </div>
                </div>
                {country && country.borders.length === 0 ? (
                  <p className="text-sm font-light text-mainDark dark:text-white">
                    This country is either landlocked or an island nation and
                    shares no land borders with other countries.
                  </p>
                ) : (
                  <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <p className="text-sm font-light dark:text-white text-mainDark">
                      Border Countries:{" "}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {borders.map((item: string, i) => (
                        <Chip label={item} key={i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
