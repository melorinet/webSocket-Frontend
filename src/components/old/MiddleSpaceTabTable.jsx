import {useState} from 'react'

const MiddleSpaceTabTable = () => {
    const [activeFileTest, setactiveFileTest] = useState(true);
    const [activeManualText, setactiveManualText] = useState(false);
    const [activeSystemSetup, setactiveSystemSetup] = useState(false);

    const ActivateFileTest=()=>{
        setactiveFileTest(true);
        setactiveManualText(false);
        setactiveSystemSetup(false);
    }

    const ActivateManualTest=()=>{
        setactiveFileTest(false);
        setactiveManualText(true);
        setactiveSystemSetup(false);
    }

    const ActivateSytemSetup=()=>{
        setactiveFileTest(false);
        setactiveManualText(false);
        setactiveSystemSetup(true);
    }

  return (
    <>
<div className=' transition-all flex flex-row w-fit gap-2 mt-4 bg-[#242F45] '>
    <div onClick={()=> ActivateFileTest()} className={`text-[20px] hover:cursor-pointer drop-shadow-2xl shadow-white active:shadow-2xl  w-[139px] h-[40px] flex place-content-center place-items-center ${activeFileTest ? ` text-white bg-[#293B63]`: ` text-black bg-[#7798DA]`}`}><span>File List</span></div>
    <div onClick={()=>ActivateManualTest()} className={`w-[139px] text-[20px] hover:cursor-pointer drop-shadow-2xl shadow-white active:shadow-2xl h-[40px] flex place-content-center place-items-center ${activeManualText ? ` text-white bg-[#293B63]`: ` text-black bg-[#7798DA]`}  `}><span>manual test</span></div>
    <div onClick={()=>ActivateSytemSetup()} className={`w-[139px]  text-[20px] hover:cursor-pointer drop-shadow-2xl shadow-white active:shadow-2xl h-[40px] flex place-content-center place-items-center ${activeSystemSetup ? ` text-white bg-[#293B63]`: ` text-black bg-[#7798DA]`} `}><span>system setup</span></div>
</div>
  <section className=' w-full h-auto bg-[#293B63] flex flex-col '>
    {/* three tabs  */}

    <div className=' flex w-[1384px] h-[60vh] bg-[#31477A] mt-4 '>

    </div>
  </section>
  </>
  )
}

export default MiddleSpaceTabTable