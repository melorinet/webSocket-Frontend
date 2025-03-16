// import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FileTest from "./components/old/FileTest";


export default function App() {
  
  return (
 
     <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="fileTest" element={<FileTest />} />
        
        
      </Routes>
    </BrowserRouter>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
