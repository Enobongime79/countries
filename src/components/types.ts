export interface Card {
  name: string;
  image: string;
  population: string;
  region: string;
  capital: string;
}

export interface CardProps {
  card: Card;
  showCardDetail: boolean;
  setShowCardDetail: React.Dispatch<React.SetStateAction<boolean>>;
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
