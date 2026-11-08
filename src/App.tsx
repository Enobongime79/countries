import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Cardbox from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Card } from "./components/types";


function App() {

  const [countries, setCountries] = useState<Card[]>([])

  async function getCardDetails(region: string, country: string) {

    if (region !== "" || country !== "") {
      const request = await axios.get("/data.json");
      const data = request.data;
      const mainData = []

      for (let i = 0; i < data.length; i++){
        if (data[i].region.toLocaleLowerCase().includes(region.toLocaleLowerCase()) && data[i].name.toLocaleLowerCase().includes(country.toLocaleLowerCase())) {
          mainData.push(data[i]);
        }
      }
      console.log("this is the main data", mainData);
      
      const finalData = [];

      for (let i = 0; i < mainData.length; i++){
        const formattedPopulation = String(mainData[i].population).split("");
        const times = Math.trunc(formattedPopulation.length / 3);
        const mod = formattedPopulation.length % 3;
  
        if (mod == 0) {
          const comma = times - 1;
          for (let i = comma; i > 0; i--){
            formattedPopulation.splice(formattedPopulation.length - (3 * i), 0, ",")
          };
        }
        
        else {
          const comma = times
          for (let i = comma; i > 0; i--){
            formattedPopulation.splice(formattedPopulation.length - (3 * i), 0, ",")
          };
        };
  
        const final = formattedPopulation.join("")
        
        finalData.push({ name: mainData[i].name, population: final, region: mainData[i].region, capital: mainData[i].capital, image: mainData[i].flag })
      }
      console.log(finalData)
      setCountries(finalData);
    }

    else {
      const request = await axios.get("/data.json");
      const data = request.data;
      const finalData = [];
  
      for (let i = 0; i < data.length; i++){
        const formattedPopulation = String(data[i].population).split("");
        const times = Math.trunc(formattedPopulation.length / 3);
        const mod = formattedPopulation.length % 3;
  
        if (mod == 0) {
          const comma = times - 1;
          for (let i = comma; i > 0; i--){
            formattedPopulation.splice(formattedPopulation.length - (3 * i), 0, ",")
          };
        }
        
        else {
          const comma = times
          for (let i = comma; i > 0; i--){
            formattedPopulation.splice(formattedPopulation.length - (3 * i), 0, ",")
          };
        };
  
        const final = formattedPopulation.join("")
        
        finalData.push({ name: data[i].name, population: final, region: data[i].region, capital: data[i].capital, image: data[i].flag })
      }
      console.log(finalData)
      setCountries(finalData);
    }
  };

  useEffect(() => {
    getCardDetails("", "");
  }, [])
  
  return (
    <div className="bg-[#202d36] min-h-screen">
      <Navbar />
      <Searchbar getCardDetails={ getCardDetails } />
      <div className="py-16 px-4 gap-8 flex flex-col md:flex-row flex-wrap md:justify-between md:px-16 justify-center items-center">
        {
          countries.map((country) => (
            <Cardbox key={crypto.randomUUID()} card={country} />
          ))
        }
      </div>
    </div>
  )
}

export default App
