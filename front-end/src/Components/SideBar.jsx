import React , {useState} from 'react'
import { LuPanelLeftClose } from "react-icons/lu";


const SideBar = ({open,setOpen ,menü ,setMenü  ,setMenüType}) => {

    

  return (
    <div className={` relative flex h-screen flex-col items-center row-start-1 row-span-5 ${open ? "col-start-1 col-span-2" : "col-start-1 "}`}>
        <div className="mt-11  mx-auto flex gap-16  h-auto  ">
            <h3 className= { `items-start font-semibold text-2xl ${open ? "" :"hidden"} text-[#FFFFFF] `} >EMATION</h3>
            <LuPanelLeftClose size={30} onClick={()=>setOpen(!open)} className='text-[#FFFFFF] hover:cursor-pointer'/>
        </div>

        <div className= {`mt-[80px] mr-0 ${open ? "" : "hidden"}`} >
            <p className='text-center  text-[#FFFFFF]'>
                emin ALi
            </p>
            <p className="mt-2 text-[#B2ADAD]">
                eminali@gmail.com
            </p>
        </div>

         <div className= {`mt-[80px] w-[90%] mr-[60px] flex flex-col items-start ml-6 ${ open ? "" : "hidden" } `}>
            <button  className="text-[#FFFFFF] font-semibold text-[16px] mx-4 my-2 hover:bg-gray-200
            py-1.5 pr-22 pl-3 rounded-xl"> Yeni Sohbet</button>
            <button onClick={()=> { setMenü(!menü); setMenüType("1")}} className="text-[#FFFFFF] font-semibold text-[16px] mx-4 my-2 hover:bg-gray-200
            py-1.5 pr-24 pl-3 rounded-xl"> İlerlemeniz</button>
            <button onClick={()=>{setMenü(!menü); setMenüType("2")}}  className="text-[#FFFFFF] font-semibold text-[16px] mx-4 my-2  hover:bg-gray-300 
            py-1.5  pr-8 pl-3 text-nowrap rounded-xl"> Karakter Testi Analiz</button>
            <button  onClick={()=>{setMenü(!menü); setMenüType("3")}} className="text-[#FFFFFF] font-semibold text-[16px] mx-4 my-2 hover:bg-gray-300 
            py-1.5 pr-15 pl-3 text-nowrap rounded-xl"> Bizi Değerlendir</button>
            <button onClick={()=>{setMenü(!menü); setMenüType("4")}} className="text-[#FFFFFF] font-semibold text-[16px] mx-4 my-2 hover:bg-gray-300 
            py-1.5 pr-23 pl-3 rounded-xl"> Hakkımızda</button>

            

        </div>
    </div>
  )
}

export default SideBar