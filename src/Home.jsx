// import React from 'react'

import { data, Link } from "react-router-dom"
import TitleLine from "./components/TitleLine"
import RightSide from "./components/RightSide"
import LeftSide from "./components/LeftSide"

const socket = new WebSocket("ws://192.168.1.111:8080/websocket");
socket.onopen = () => {
    console.log("✅ Connected to WebSocket server");

    // ارسال درخواست برای شروع ماشین
    const startCommand = JSON.stringify({ destination: "/start-machine" });
    socket.send(startCommand);
};

socket.onmessage = (event) => {
    console.log("📩 Received message:", event.data);
};

socket.onclose = () => {
    console.log("❌ Disconnected from WebSocket server");
};

socket.onerror = (error) => {
    console.error("🚨 WebSocket Error:", error);
};

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