import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
import Hero from "./Components/Hero"
import './App.css'
import {useState} from "react";
import MenüSection from "./Components/MenüSection"

function App() {
  const [open ,  setOpen]=useState(true);
  const [menü , setMenü]= useState(false);
  const [menüType,setMenüType]=useState("0")
  

  return (
    <div className="bg-[#000000] grid grid-cols-10 grid-rows-[70px_auto]">
      <Navbar open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} menü={menü} setMenü={setMenü} setMenüType={setMenüType}/>
      <Hero open={open} setOpen={setOpen}/>
      <MenüSection menü={menü} setMenü={setMenü} open={open} menüType={menüType} />
    </div>
    
  )
}

export default App
