

const Specials = () => {
  return (
    <div
        className={`bg-[#B5D4FA] h-[40vh] w-full relative pt-[18px]`}>
        <div
          className={`flex flex-row`}>
            <button
              className={`font-[400] leading-[22.5px] text-[15px] py-[2px] px-[22px] bg-[#CACACA] ml-[8px]`}>
              head safe z
            </button>
            <button
              className={`font-[400] leading-[22.5px] text-[15px] py-[2px] px-[22px] bg-[#CACACA] ml-[8px]`}>
              discard
            </button>
            <button
              className={`font-[400] leading-[22.5px] text-[15px] py-[2px] px-[22px] bg-[#CACACA] ml-[8px]`}>
              recycle
            </button>
        </div>
    </div>
  )
}

export default Specials
