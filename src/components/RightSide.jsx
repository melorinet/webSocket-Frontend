import { useState } from "react"

import Jobs from "./rightsides/Jobs"
import JobSub from "./rightsides/JobSub"

import Parts from "./rightsides/Parts"

import Packages from "./rightsides/Packages"
import PackageSub from "./rightsides/PackageSub"

import Vision from "./rightsides/Vision"

import Feeders from "./rightsides/Feeders"

const RightSide = (props) => {
    const [activeTab, setActiveTab] = useState('job')



  return (
    <div
        className="flex flex-col pl-2 w-[100%]">
        <div
            data-id="tab_bar"
            className="flex flex-col">
            <ul
                className="flex flex-row mt-6">
                <li
                    onClick={()=>setActiveTab('job')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'job')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2"} text-[#fff] `} >
                    Job
                </li>
                <li
                    onClick={()=>setActiveTab('parts')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'parts')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2"} text-[#fff]`}>
                    Parts
                </li>
                <li
                    onClick={()=>setActiveTab('packages')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'packages')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                    Packages
                </li>
                <li
                    onClick={()=>setActiveTab('vision')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'vision')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                    Vision
                </li>
                <li
                    onClick={()=>setActiveTab('feeders')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'feeders')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279] pt-0 mt-2 "} text-[#fff]`}>
                    Feeders
                </li>
                <li
                    onClick={()=>setActiveTab('setup')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'setup')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                    Machine Setup
                </li>
                <li
                    onClick={()=>setActiveTab('issues')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'issues')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                    issues & solutions
                </li>
                <li
                    onClick={()=>setActiveTab('log')}
                    className={`flex px-3 cursor-pointer mx-[1px] items-end ${(activeTab == 'log')?"bg-[#B9B9B9] pt-2":"bg-[#3F5279]  pt-0 mt-2"} text-[#fff]`}>
                    Log
                </li>
            </ul>
        </div>
        <div
            className={`bg-[#B9B9B9] h-[45vh] w-[100%] mx-[1px]`}
            data-id="active_content">
            {
                (activeTab == 'job')?
                <Jobs 
                    />:''
            }
            {
                (activeTab == 'parts')?
                <Parts 
                    />:''
            }
            {
                (activeTab == 'packages')?
                <Packages 
                    />:''
            }
            {
                (activeTab == 'vision')?
                <Vision 
                    />:''
            }
            {
                (activeTab == 'feeders')?
                <Feeders 
                    />:''
            }


        </div>
        {
            (activeTab == 'job')?
            <JobSub 
                />:''
        }

        {
            (activeTab == 'packages')?
            <PackageSub 
                />:''
        }
        
    </div>
  )
}

export default RightSide
