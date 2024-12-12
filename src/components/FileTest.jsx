import { useState } from "react"

const FileTest = () => {
    const [activePCBinfo, setactivePCBinfo] = useState(true);
    const [activaCoorinfo, setactivaCoorinfo] = useState(false);
    const [activePanelBinfo, setactivePanelBinfo] = useState(false);
    const [activeFeederinfo, setactiveFeederinfo] = useState(false);
    const [activeNozzinfo, setactiveNozzinfo] = useState(false)

    const ActivatePCBinfo=()=>{
        setactivePCBinfo(true);
        setactivaCoorinfo(false);
        setactivePanelBinfo(false);
        setactiveFeederinfo(false);
        setactiveNozzinfo(false);
    }
    const ActivateCoorinfo=()=>{
        setactivePCBinfo(false);
        setactivaCoorinfo(true);
        setactivePanelBinfo(false);
        setactiveFeederinfo(false);
        setactiveNozzinfo(false);
    }
    const ActivatePanelBinfo=()=>{
        setactivePCBinfo(false);
        setactivaCoorinfo(false);
        setactivePanelBinfo(true);
        setactiveFeederinfo(false);
        setactiveNozzinfo(false);
    }
    const ActivateFeederinfo=()=>{
        setactivePCBinfo(false);
        setactivaCoorinfo(false);
        setactivePanelBinfo(false);
        setactiveFeederinfo(true);
        setactiveNozzinfo(false);
    }
    const ActivateNozzinfo=()=>{
        setactivePCBinfo(false);
        setactivaCoorinfo(false);
        setactivePanelBinfo(false);
        setactiveFeederinfo(false);
        setactiveNozzinfo(true);
    }
  return (
    <div className=" w-full h-screen flex flex-col bg-[#242F45] pt-5 " >
        <span className=" text-white text-[32px] font-[400px] ml-4 ">File : test</span>
  
        <section className=" flex flex-row w-full gap-4 bg-[#242F45] px-4">
            {/* LEFT  */}
        <div className=" flex flex-col">

            {/* tabbs */}
          <div className=" transition-all flex flex-row w-fit gap-2 mt-4 bg-[#242F45]">
            <div onClick={()=>ActivatePCBinfo()} className={` hover:cursor-pointer shadow-sm active:drop-shadow-2xl shadow-white  flex w-[245px] h-[41px] place-content-center place-items-center ${activePCBinfo? ` text-white bg-[#91B6FF] scale-y-110`:` text-black bg-[#7798DA]`} `} >1.PCB Informattion</div>
            <div onClick={()=>ActivateCoorinfo()} className={` hover:cursor-pointer shadow-sm active:drop-shadow-2xl shadow-white  flex w-[245px] h-[41px] place-content-center place-items-center ${activaCoorinfo? ` text-white bg-[#91B6FF] scale-y-110`:` text-black bg-[#7798DA]`}`} >2.Coordinate information</div>
            <div onClick={()=>ActivatePanelBinfo()} className={` hover:cursor-pointer shadow-sm active:drop-shadow-2xl shadow-white  flex w-[245px] h-[41px] place-content-center place-items-center ${activePanelBinfo? ` text-white bg-[#91B6FF] scale-y-110`:` text-black bg-[#7798DA]` } `} >3.panelized board information</div>
            <div onClick={()=>ActivateFeederinfo()} className={` hover:cursor-pointer shadow-sm active:drop-shadow-2xl shadow-white flex w-[245px] h-[41px] place-content-center place-items-center ${activeFeederinfo? ` text-white bg-[#91B6FF] scale-y-110`:` text-black bg-[#7798DA]` } `}>4.feeder information</div>
            <div onClick={()=>ActivateNozzinfo()} className={` hover:cursor-pointer shadow-sm active:drop-shadow-2xl shadow-white  flex w-[245px] h-[41px] place-content-center place-items-center ${activeNozzinfo? ` text-white bg-[#91B6FF] scale-y-110`:` text-black bg-[#7798DA]` } `} >5.Nozzle information</div>
          
          </div>
          <section className=" w-full h-[80vh] bg-[#91B6FF] ">

          </section>
        </div>
        {/* RIGHT  */}
        </section>

    </div>
  )
}

export default FileTest