

const Actuators = () => {
  return (
    <div
        className={`bg-[#B5D4FA] h-[40vh] w-full relative`}>
        <div
          className={`flex flex-row flex-wrap`}>
            <button
              className={`font-[400] leading-[22.5px] text-[14px] py-[2px] px-[12px] mt-[18px] bg-[#CACACA] ml-[8px]`}>
              LIGHT_BOTTOM
            </button>
            <button
              className={`font-[400] leading-[22.5px] text-[14px] py-[2px] px-[12px] mt-[18px] bg-[#CACACA] ml-[8px]`}>
              H1:LIGHT_TOP
            </button>
            <button
              className={`font-[400] leading-[22.5px] text-[14px] py-[2px] px-[12px] mt-[18px] bg-[#CACACA] ml-[8px]`}>
              H1:PUMP
            </button>
            <button
              className={`font-[400] leading-[22.5px] text-[14px] py-[2px] px-[12px] mt-[18px] bg-[#CACACA] ml-[8px]`}>
              H1:A1
            </button>
        </div>
      </div>
  )
}

export default Actuators
