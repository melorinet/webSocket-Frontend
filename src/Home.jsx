// import React from 'react'

const WebSocket = require('ws')

const socket = new WebSocket("ws://127.0.0.1:8080/machine")

socket.on("open",()=>{
  console.log("connected to websocket server")
  socket.send(JSON.stringify({destination:"/start-machine"}));
})

socket.on("message",(data)=>{
  console.log("recived",data)
})


socket.on("close",()=>{
  console.log("closed")
})

socket.on("error",(error)=>{
  console.log("error",error)
})

import { data, Link } from "react-router-dom"
import TitleLine from "./components/TitleLine"
import RightSide from "./components/RightSide"
import LeftSide from "./components/LeftSide"
const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col p-[22px] bg-[#242F45] ">
         <div
          className="w-full h-auto flex flex-row ">
            {/* Left Side */}
            <div
              className="flex flex-col w-[28.3%]">
              <LeftSide 
                />
            </div>
            {/* Right Side */}
            <div
              className="w-[70%]">
              <RightSide 
                />
              
            </div>
         </div>
    </div>
  )
}

export default Home