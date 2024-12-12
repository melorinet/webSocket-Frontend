// import React from 'react'

import BottomBTNs from "./components/BottomBTNs"
import MiddleSpaceTabTable from "./components/MiddleSpaceTabTable"
import TopThreeBTN from "./components/TopThreeBTN"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className=" w-full h-screen flex flex-col p-4 bg-[#242F45] ">
         <Link className="  border border-white w-40 right-3 self-end bg-white hover:cursor-pointer text-black" to="fileTest">go to filetest --</Link>
      <TopThreeBTN />
      <MiddleSpaceTabTable />
      <BottomBTNs />
    </div>
  )
}

export default Home