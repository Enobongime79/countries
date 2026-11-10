import { IconArrowNarrowLeft } from "@tabler/icons-react";
import type { Preview } from "./types";

interface CardDetailsProps {
  showCardDetail: boolean;
  countryPreview: Preview | null;
  setShowCardDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardDetails({
  showCardDetail,
  countryPreview,
  setShowCardDetail,
}: CardDetailsProps) {
  return (
    <div className="py-6 lg:py-20 dark:text-white mx-8 md:px-16 flex flex-col font-[Inter]">
      <button
        onClick={() => {
          setShowCardDetail(!showCardDetail);
        }}
        className="flex items-center bg-white dark:bg-[#2b3743] dark:text-white shadow-lg hover:cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-400 text-black gap-1 py-1 w-fit rounded px-6"
      >
        <IconArrowNarrowLeft /> <p className="text-sm">Back</p>
      </button>

      {countryPreview &&
        <div className="mt-8 lg:mt-12 flex lg:flex-row flex-col lg:items-center lg:px-24 lg:gap-24 gap-12">
          <div className="flex flex-col items-center">
            <img src={countryPreview.flag} className="w-fit lg:w-150" />
          </div>
          <div className="lg:mt-0">
            <h1 className="font-semibold lg:text-3xl text-xl">{countryPreview.name}</h1>
            <div className="flex lg:flex-row flex-col mt-8">
              <div className="flex lg:mt-0 flex-col lg:gap-2 gap-4">
                <p className="font-semibold text-sm">Native Name:&nbsp; <span className=" font-light">{countryPreview.nativeName }</span></p>
                <p className="font-semibold text-sm">Population:&nbsp; <span className=" font-light"> {countryPreview.population }</span></p>
                <p className="font-semibold text-sm">Region:&nbsp; <span className=" font-light">{countryPreview.region }</span></p>
                <p className="font-semibold text-sm">Sub region:&nbsp; <span className=" font-light"> {countryPreview.subRegion }</span></p>
                <p className="font-semibold text-sm">Capital:&nbsp; <span className=" font-light"> {countryPreview.capital }</span></p>
              </div>

              <div className="mt-8 lg:mt-0 flex flex-col lg:ms-auto gap-4 lg:gap-2">
                <p className="font-semibold text-sm">Top Level Domain:&nbsp; <span className=" font-light">{countryPreview.domain }</span></p>
                <p className="font-semibold text-sm">Currencies:&nbsp; <span className=" font-light"> {countryPreview.currencies[0]["name"] }</span></p>
                <p className="font-semibold text-sm">Languages:&nbsp; <span className="font-light">{ countryPreview.languages}</span></p>
              </div>
            </div>

              <div className="mt-8 flex flex-col lg:flex-row flex-wrap gap-4">
                <h2 className="text-md font-semibold">Border Countries :</h2>
                <div className="flex flex-row flex-wrap gap-2">
                  {countryPreview.borderCountries.map((border) => (<p className="text-xs shadow dark:bg-[#2b3743] rounded px-2 py-1">{ border }</p>))}
                </div>
              </div>
          </div>
        </div>}
    </div>
  );
}

export default CardDetails;
