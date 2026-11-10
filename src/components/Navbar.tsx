import { IconMoon } from "@tabler/icons-react";
import { IconSun } from '@tabler/icons-react';
import { useState } from "react";

function Navbar() {

  const [dark, setDark] = useState(true);
  const [darkText, setDarkText] = useState("Light");
  const setDarkMode = () => {
    if (dark) {
      setDark(!dark);
      document.documentElement.classList.remove("dark");
      setDarkText("Dark")
    }
    else {
      setDark(!dark);
      document.documentElement.classList.add("dark");
      setDarkText("Light")
    }
  }
  
  return (
    <div className="h-16 md:px-16 shadow z-50 flex flex-row dark:text-white bg-white text-black sticky top-0 items-center px-4 text-sm justify-between dark:bg-[#2b3743]">
      <div className="text-lg font-medium font-[Inter]">
        Where in the world? 
      </div>
      <button onClick={ () => {setDarkMode()} } title="change to light mode" className="font-[Inter] text-xs font-medium flex flex-row items-center gap-1 border px-2 rounded-lg dark:text-black dark:bg-white text-white bg-black hover:cursor-pointer py-1">
        {dark ? <IconSun /> : <IconMoon />}
        
        {darkText} Mode
      </button>
    </div>
  )
}

export default Navbar
