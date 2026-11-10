import type { Card } from "./types";
import Cardbox from "./Card";

interface CountriesProps {
  countries: Card[];
  getDetails: (country: string) => void;
}

function Countries({ countries, getDetails }: CountriesProps) {
  return (
    <div className="flex items-center lg:flex-row flex-col ">
      <div className="py-16 px-4 gap-8 flex flex-col md:flex-row flex-wrap md:justify-start md:px-16 justify-center items-center">
        {
          countries.map((country: Card) => (
            <Cardbox getDetails={getDetails} key={crypto.randomUUID()} card={country} />
          ))
        }
      </div>
    </div>
  )
}

export default Countries;