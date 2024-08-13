import "./index.css"
import "./App.css"

/***
 * Header 
 * Sidebar
 * Main
 *   CategoryList
 *   VideoComponent
 *     Video
 * 
 * 
 * 
 * 
 */

import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Main from "./Pages/Main"
import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Results from "./Pages/Results"
import { useState } from "react"
import Watch from "./Pages/Watch"


function App() {
  const [isToggle,setIsToggle] = useState(true)
  return (
    <BrowserRouter>
    <div className="relative">
       <Header setIsToggle={setIsToggle} isToggle={isToggle}/>
       <div className="flex items-start relative">
          <Sidebar setIsToggle={setIsToggle} isToggle={isToggle}/>
          <Routes>
          <Route path="/" element={<Main setIsToggle={setIsToggle}/>}></Route>
         <Route path="/result" element={<Results setIsToggle={setIsToggle} isToggle={isToggle}/>}></Route>
         <Route path="/watch" element={<Watch setIsToggle={setIsToggle} isToggle={isToggle}/>}></Route>
        </Routes>
       </div>
    </div>

    </BrowserRouter>
  )
}

export default App