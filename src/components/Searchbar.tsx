import { IconSearch } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react"; 
import { useState } from "react";
import type { Region, RegionProps } from "./types";

const regions: Region[] = [
  { key: 1, region: "Africa", value: "africa" },
  { key: 2, region: "America", value: "americas" },
  { key: 3, region: "Asia", value: "asia" },
  { key: 4, region: "Europe", value: "europe" },
  { key: 5, region: "Oceania", value: "oceania" },
  { key: 6, region: "Continent", value: ""}
];

interface SearchProps {
  getCardDetails: (region: string, country: string) => void;
}

function Searchbar({ getCardDetails }: SearchProps) {
  
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  const [continent, setContinent] = useState("Continent");
  
  const RegionDropdown = ({ region }: RegionProps) => {
    const optionClick = (region: Region) => {
      setContinent(region.region);
      setRegionSearch(region.value)
      const regionValue = region.value
      getCardDetails(regionValue, searchValue);
      setDropdown(!dropdown);
    }
    return (
      <div key={region.key} onClick={() => {optionClick(region)}} className={!dropdown ? 'hidden' : 'h-8 dark:hover:bg-gray-600 hover:bg-gray-300 dark:text-gray-400 text-dark flex items-center bg-white px-4 dark:bg-[#2b3743]'}>
        <p>{region.region}</p>
      </div>
    )
  }

  const fuzzySearch = (search: string) => {
    setSearchValue(search);
    const currentSearch = search;
    getCardDetails(regionSearch, currentSearch)
  }
  
  return (
    <div className="mx-4 md:mx-16 flex md:flex-row md:gap-4 md:justify-between mt-8 flex-col">
      <div className="h-10 gap-4 text-sm px-4 shadow md:w-100  dark:bg-[#2b3743] bg-white text-black flex rounded-lg flex-row items-center dark:text-white font-[Inter] ">
        <IconSearch stroke={2} />
        <input
          value={searchValue}
          placeholder="Search for a country..."
          className="w-full focus:outline-none"
          onChange={(e) => {fuzzySearch(e.target.value)}}
        />
      </div>
      <div className="font-[Inter] flex flex-col gap-2 text-sm mt-4 md:mt-0 w-fit ">
        <div onClick={() => {setDropdown(!dropdown)}} className="flex rounded-lg relative flex-row h-10 gap-2 px-4 items-center text-black bg-white shadow-lg dark:text-white dark:bg-[#2b3743]">
          <p>Filter by {continent} </p>
          <IconChevronDown stroke={1.5} />
        </div>
        <div className="flex top-50 md:top-36 w-42 rounded-lg overflow-hidden flex-col absolute">
          {regions.map((region) => (
            <RegionDropdown region={region} key={region.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
