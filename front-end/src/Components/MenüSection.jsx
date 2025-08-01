import React, {useState }from 'react'
import { GiLovers } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { GiThreeFriends } from "react-icons/gi";
import { TbClover } from "react-icons/tb";
import { FaRegLaugh } from "react-icons/fa";

const MenüSection = ({menü , setMenü , open, menüType}) => {

  const [textarea,setTextarea]=useState("")

 

  return (
    <>
       {open && menü && (
        <div className={`absolute z-50 bg-[#999797] opacity-96 rounded-3xl shadow-[2_2_10px_rgba(255,255,255,1)] ${
             menüType === "1" 
             ? "w-[70%] h-[70%] left-80 top-20" 
             : menüType==="2" ? "w-[22%] h-[70%] left-60 top-30" 
             : menüType==="3" ? "w-[40%] h-[40%] left-130 top-20" 
             : "w-[22%] h-[70%] left-60 top-30"
        
        } `}>
            {
              menüType==="1" 
              ? <div>merhaba</div>
              : menüType==="2" 
              ?<div className="flex flex-col">
                <div className='flex gap-4 m-4 justify-center'>
                  <GiLovers size={50}/>
                  <GrUserManager size={50} />
                  <GiThreeFriends size={50} />

                </div>

                <div className='flex gap-4 m-4 justify-center'>
                  <TbClover size={50}/>
                  <FaRegLaugh size={50} />

                </div>


                <p className='text-[26px] leading-tight mx-6 text-center mt-6 font-semibold'>Hemen karakter testini çöz </p>
                <p className="text-[16px] text-center mt-3 text-[#57564F]">Karakterini öğren </p>
                
                

              </div>

              : menüType==="3" 
              ? <div className="m-4 flex flex-col items-center ">
                <p className="text-center">Merhaba bizim hakkımızda görüşlerini bildirmek ister misin ?</p>
                <textarea onChange={(e)=>setTextarea(e.target.value)} value={textarea} className="mt-4 w-[80%] py-8 pl-2 border-[2px] border-black rounded-2xl text-white" placeholder='görüşleriniz'> </textarea>
                <button onClick={()=>setTextarea("")}className="w-[30%] bg-[#6b705c] rounded-4xl mt-2 p-2">Gönder</button>
                </div>
              :
              <div className="flex flex-col m-4">
                <h2 className="text-center text-[24px] font-semibold">Hakkımızda</h2>
                <p className="mt-2 yext-[16px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque nam obcaecati quasi quia necessitatibus ea alias aliquid eum deserunt esse.</p>


                <div className='mt-3'>
                  <p className="text-[16px] font-bold">ÖmerFaruk Aydön</p>
                  <p  className="text-[12px]">omerfarukaydon@gmail.com</p>
                </div>
                <div className='mt-3'>
                  <p className="text-[16px] font-bold">ÖmerFaruk Aydön</p>
                  <p  className="text-[12px]">omerfarukaydon@gmail.com</p>
                </div>
                <div className='mt-3'>
                  <p className="text-[16px] font-bold">ÖmerFaruk Aydön</p>
                  <p  className="text-[12px]">omerfarukaydon@gmail.com</p>
                </div>
               <div className='mt-3'>
                  <p className="text-[16px] font-bold">ÖmerFaruk Aydön</p>
                  <p  className="text-[12px]">omerfarukaydon@gmail.com</p>
                </div>

                </div>

            }
        </div>
    )}

    </>
    
    
  )
}

export default MenüSection