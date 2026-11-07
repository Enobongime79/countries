import type { Card, CardProps } from "./types"

function Cardbox({ card }: CardProps) {
  return (
    <div className="flex flex-col md:mt-8 rounded-lg text-white font-[Inter] hover:cursor-pointer bg-[#2b3743] w-80">
      <div className="md:h-50 md:w-80">
        <img src={card.image} className="md:h-50 md:w-80 " />
      </div>
      <div className="py-8 px-8">
        <p className="text-lg font-bold">{card.name}</p>
        <div className="flex flex-col gap-2 text-sm mt-4">
          <p className="font-semibold">Population: <span className="font-light">{ card.population }</span></p>
          <p className="font-semibold">Region: <span className="font-light">{ card.region }</span></p>
          <p className="font-semibold">Capital: <span className="font-light">{ card.capital }</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cardbox;