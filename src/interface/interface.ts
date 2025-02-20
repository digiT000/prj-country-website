export interface CountryProp {
  image: string;
  title: string;
  population: number;
  region: string;
  capital: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface NativeName {
  eng: {
    official: string;
    common: string;
  };
  // Add other native languages if needed based on your data
  [key: string]: { official: string; common: string } | undefined; // Make other languages optional
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface CountryInterface {
  flags: Flags;
  name: Name;
  capital: string;
  region: string;
  population: number;
  // Add other properties as needed based on your data
  [key: string]: any; // Make other properties optional
}
