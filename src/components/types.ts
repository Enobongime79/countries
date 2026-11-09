export interface Card {
  name: string;
  image: string;
  population: string;
  region: string;
  capital: string;
}

export interface CardProps {
  card: Card;
  getDetails: (country: string) => void;
}


export interface Region {
  key: number;
  region: string;
  value: string;
}

export interface RegionProps {
  region: Region;
}

export interface Search {
  reg: string;
  country: string;
}

export interface SearchProps {
  search: Search
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  string: string;
  nativeName: string;
}

export interface Preview {
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subRegion: string;
  capital: string;
  flag: string;
  domain: string[];
  currencies: Currency[];
  languages: string;
  borderCountries: string[];
}
