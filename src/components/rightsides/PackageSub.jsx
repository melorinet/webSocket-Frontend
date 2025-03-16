import { useState } from "react"

import TableContent from "../TableContent"
import TableHeader from "../TableHeader"
import TitleLine from "../TitleLine"

const PackageSub = () => {
    const [activeTab, setActiveTab] = useState('nozzle_tips')

  return (
    <div
        className={`flex flex-col`}>
        <TitleLine
            className={`mt-2`}
            title="placements"/>
        <div
            className={` h-[32vh] w-[100%] mx-[1px] mt-[2vh] py-[18px] px-[13px]`}>
            <div
                data-id="pakage_sub_tab_bar"
                className="flex flex-col">
                <ul
                    className="flex flex-row">
                    <li
                        onClick={()=>setActiveTab('nozzle_tips')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'nozzle_tips')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2"} text-[#fff] `} >
                        Nozzle tips
                    </li>
                    <li
                        onClick={()=>setActiveTab('setting')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'setting')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2"} text-[#fff]`}>
                        Setting
                    </li>
                    <li
                        onClick={()=>setActiveTab('footprint')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'footprint')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                        Footprint
                    </li>
                    <li
                        onClick={()=>setActiveTab('v_compos')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'v_compos')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                        v compos
                    </li>
                    <li
                        onClick={()=>setActiveTab('bottom_v_s')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'bottom_v_s')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2 "} text-[#fff]`}>
                        bottom v s
                    </li>
                    <li
                        onClick={()=>setActiveTab('f_v_setting')}
                        className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'f_v_setting')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                        f v setting
                    </li>
                </ul>
            </div>
            <div
                className="bg-[#B9B9B9] min-h-[30vh] p-2 ml-[1px]">
                <div
                    className="flex flex-col bg-[#F6F5F5]">
                    <TableHeader
                        total={2}
                        value1="nozzle tip"
                        value2="Compatible?"
                        bgcolor="true"/>
                    <TableContent
                        total={2}
                        value1="NT1"
                        value2={<input type="checkbox" />}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PackageSub
