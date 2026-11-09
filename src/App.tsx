import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Countries from "./components/Countries";
import CardDetails from "./components/CardDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Card, Preview } from "./components/types";

document.documentElement.classList.add("dark");

function App() {
  const [countries, setCountries] = useState<Card[]>([]);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [countryPreview, setCountryPreview] = useState<Preview | null>(null);

  async function getCardDetails(region: string, country: string) {
    if (region !== "" || country !== "") {
      const request = await axios.get("/data.json");
      const data = request.data;
      const mainData = [];

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].region
            .toLocaleLowerCase()
            .includes(region.toLocaleLowerCase()) &&
          data[i].name.toLocaleLowerCase().includes(country.toLocaleLowerCase())
        ) {
          mainData.push(data[i]);
        }
      }
      console.log("this is the main data", mainData);

      const finalData = [];

      for (let i = 0; i < mainData.length; i++) {
        const formattedPopulation = String(mainData[i].population).split("");
        const times = Math.trunc(formattedPopulation.length / 3);
        const mod = formattedPopulation.length % 3;

        if (mod == 0) {
          const comma = times - 1;
          for (let i = comma; i > 0; i--) {
            formattedPopulation.splice(
              formattedPopulation.length - 3 * i,
              0,
              ",",
            );
          }
        } else {
          const comma = times;
          for (let i = comma; i > 0; i--) {
            formattedPopulation.splice(
              formattedPopulation.length - 3 * i,
              0,
              ",",
            );
          }
        }

        const final = formattedPopulation.join("");

        finalData.push({
          name: mainData[i].name,
          population: final,
          region: mainData[i].region,
          capital: mainData[i].capital,
          image: mainData[i].flag,
        });
      }
      console.log(finalData);
      setCountries(finalData);
    } else {
      const request = await axios.get("/data.json");
      const data = request.data;
      const finalData = [];

      for (let i = 0; i < data.length; i++) {
        const formattedPopulation = String(data[i].population).split("");
        const times = Math.trunc(formattedPopulation.length / 3);
        const mod = formattedPopulation.length % 3;

        if (mod == 0) {
          const comma = times - 1;
          for (let i = comma; i > 0; i--) {
            formattedPopulation.splice(
              formattedPopulation.length - 3 * i,
              0,
              ",",
            );
          }
        } else {
          const comma = times;
          for (let i = comma; i > 0; i--) {
            formattedPopulation.splice(
              formattedPopulation.length - 3 * i,
              0,
              ",",
            );
          }
        }

        const final = formattedPopulation.join("");

        finalData.push({
          name: data[i].name,
          population: final,
          region: data[i].region,
          capital: data[i].capital,
          image: data[i].flag,
        });
      }
      console.log(finalData);
      setCountries(finalData);
    }
  }

  useEffect(() => {
    getCardDetails("", "");
  }, []);

  const getDetails = async (country: string) => {
    setShowCardDetail(!showCardDetail);
    const request = await axios.get("/data.json");
    const data = request.data;
    let mainData: Preview | null = null;
    for (let i = 0; i < data.length; i++) {
      const formattedPopulation = String(data[i].population).split("");
      const times = Math.trunc(formattedPopulation.length / 3);
      const mod = formattedPopulation.length % 3;

      if (mod == 0) {
        const comma = times - 1;
        for (let i = comma; i > 0; i--) {
          formattedPopulation.splice(
            formattedPopulation.length - 3 * i,
            0,
            ",",
          );
        }
      } else {
        const comma = times;
        for (let i = comma; i > 0; i--) {
          formattedPopulation.splice(
            formattedPopulation.length - 3 * i,
            0,
            ",",
          );
        }
      }

      const final = formattedPopulation.join("");

      if (data[i].name == country) {
        
        const languages = data[i].languages;
        const langNameArray = [];
        
        for (let i = 0; i < languages.length; i++){
          langNameArray.push(languages[i]["name"]);
        }
        
        console.log(langNameArray);
        const formattedLanguage = langNameArray.join(", ");
        console.log("This is the formatted language", formattedLanguage);
        
        mainData = {
          name: data[i].name,
          nativeName: data[i].nativeName,
          population: final,
          region: data[i].region,
          subRegion: data[i].subregion,
          capital: data[i].capital,
          flag: data[i].flag,
          domain: data[i].topLevelDomain,
          currencies: data[i].currencies,
          languages: formattedLanguage,
          borderCountries: data[i].borders,
        };
        break;
      }
    }
    setCountryPreview(mainData);
    console.log(mainData);
  };

  return (
    <div className="dark:bg-[#202d36] bg-white min-h-screen">
      <Navbar />
      {!showCardDetail ? (
        <div>
          <Searchbar getCardDetails={getCardDetails} />
          <Countries getDetails={getDetails} countries={countries} />
        </div>
      ) : (
        <CardDetails
          countryPreview={countryPreview}
          showCardDetail={showCardDetail}
          setShowCardDetail={setShowCardDetail}
        />
      )}
    </div>
  );
}

export default App;
