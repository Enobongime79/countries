export interface Card {
  name: string;
  image: string;
  population: number;
  region: string;
  capital: string;
}

export interface CardProps {
  card: Card
}


export interface Region {
  key: number;
  region: string;
}

export interface RegionProps {
  region: Region;
}