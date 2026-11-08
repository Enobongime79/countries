import { IconSearch } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react"; 
import { useState } from "react";
import type { Region, RegionProps } from "./types";

const regions: Region[] = [
  { key: 1, region: "Africa" },
  { key: 2, region: "America" },
  { key: 3, region: "Antartica" },
  { key: 4, region: "Asia" },
  { key: 5, region: "Europe" },
  { key: 6, region: "Oceania" },
  { key: 7, region: "Continent"}
];

function Searchbar() {
  
  const [dropdown, setDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [continent, setContinent] = useState("Continent");
  
  const RegionDropdown = ({ region }: RegionProps) => {
    const optionClick = (region: string) => {
      setContinent(region);
      setDropdown(!dropdown);
    }
    return (
      <div key={region.key} onClick={() => {optionClick(region.region)}} className={!dropdown ? 'hidden' : 'h-8 hover:bg-gray-600 text-gray-400 flex items-center px-4 bg-[#2b3743]'}>
        <p>{region.region}</p>
      </div>
    )
  }
  
  return (
    <div className="mx-4 md:mx-16 flex md:flex-row md:gap-4 md:justify-between mt-8 flex-col">
      <div className="h-10 gap-4 text-sm px-4 md:w-100  bg-[#2b3743] flex rounded-lg flex-row items-center text-white font-[Inter] ">
        <IconSearch stroke={2} />
        <input
          value={searchValue}
          placeholder="Search for a country..."
          className="w-full focus:outline-none"
          onChange={(e) => {setSearchValue(e.target.value)}}
        />
      </div>
      <div className="font-[Inter] flex flex-col gap-2 text-sm mt-4 md:mt-0 w-fit ">
        <div onClick={() => {setDropdown(!dropdown)}} className="flex rounded-lg relative flex-row h-10 gap-2 px-4 items-center text-white bg-[#2b3743]">
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
