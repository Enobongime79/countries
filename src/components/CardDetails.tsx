import { IconArrowNarrowLeft } from '@tabler/icons-react';

interface CardDetailsProps {
  showCardDetail: boolean;
  setShowCardDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardDetails({showCardDetail, setShowCardDetail}: CardDetailsProps) {
  return (
    <div className="my-8 dark:text-white mx-8 md:px-16 flex items-center font-[Inter]">
      <button onClick={() => {setShowCardDetail(!showCardDetail)}} className="flex items-center bg-white dark:bg-[#2b3743] dark:text-white shadow-lg hover:cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-400 text-black gap-1 py-1 rounded px-6"><IconArrowNarrowLeft />  <p className='text-sm'>Back</p></button>
    </div>
  )
}

export default CardDetails;