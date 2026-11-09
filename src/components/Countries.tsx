import type { Card } from "./types";
import Cardbox from "./Card";

interface CountriesProps {
  setShowCardDetail: React.Dispatch<React.SetStateAction<boolean>>;
  countries: Card[];
  showCardDetail: boolean;
}

function Countries({ countries, setShowCardDetail, showCardDetail }: CountriesProps) {
  return (
    <div className="py-16 px-4 gap-8 flex flex-col md:flex-row flex-wrap md:justify-between md:px-16 justify-center items-center">
      {
        countries.map((country: Card) => (
          <Cardbox setShowCardDetail={setShowCardDetail} showCardDetail={showCardDetail} key={crypto.randomUUID()} card={country} />
        ))
      }
    </div>
  )
}

export default Countries;