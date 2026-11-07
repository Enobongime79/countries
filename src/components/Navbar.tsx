import { IconMoonFilled } from "@tabler/icons-react";

function Navbar() {
  return (
    <div className="h-16 md:px-16 flex flex-row text-white sticky top-0 items-center px-4 text-sm justify-between bg-[#2b3743]">
      <div className="text-lg font-medium font-[Inter]">
        Where in the world? 
      </div>
      <div className="font-[Inter] flex flex-row items-center gap-2 hover:bg-gray-700 px-4 rounded hover:cursor-pointer py-2">
        <IconMoonFilled />
        Dark Mode
      </div>
    </div>
  )
}

export default Navbar
