import { useState } from "react"
import Jobs from "./leftsides/Jobs"
import Specials from "./leftsides/Specials"
import Actuators from './leftsides/Actuators'
import Safety from "./leftsides/Safety"

const MachineControls = () => {

    const [activeTab, setActiveTab] = useState('job')
  return (
    <div>
        <div
            data-id="left_tab_bar"
            className="flex flex-col">
            <ul
                className="flex flex-row mt-6">
                <li
                    onClick={()=>setActiveTab('job')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'job')?"bg-[#B5D4FA] pt-1":"bg-[#E6E6E6] pt-0 mt-1"} text-[#000] `} >
                    Job
                </li>
                <li
                    onClick={()=>setActiveTab('special')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'special')?"bg-[#B5D4FA] pt-1":"bg-[#E6E6E6] pt-0 mt-1"} text-[#000]`}>
                    special
                </li>
                <li
                    onClick={()=>setActiveTab('actuators')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'actuators')?"bg-[#B5D4FA] pt-1":"bg-[#E6E6E6]  pt-0 mt-1"} text-[#000]`}>
                    Actuators
                </li>
                <li
                    onClick={()=>setActiveTab('safety')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'safety')?"bg-[#B5D4FA] pt-1":"bg-[#E6E6E6]  pt-0 mt-1"} text-[#000]`}>
                    Safety
                </li>
                
            </ul>
        </div>
        <div
            className="mx-[1px]">
            {
                (activeTab == 'job')?
                <Jobs
                    />:''
            }
            {
                (activeTab == 'special')?
                <Specials
                    />:''
            }
            {
                (activeTab == 'actuators')?
                <Actuators
                    />:''
            }
            {
                (activeTab == 'safety')?
                <Safety
                    />:''
            }
        </div>
    </div>
  )
}

export default MachineControls
