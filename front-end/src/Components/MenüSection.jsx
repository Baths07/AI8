import React from 'react'

const MenüSection = ({menü , setMenü , open, menüType}) => {
  return (
    <>
       {open && menü && (
        <div className={`absolute z-50 bg-[#999797] opacity-96 rounded-3xl shadow-[2_2_10px_rgba(255,255,255,1)] ${
             menüType === "1" ? "w-[70%] h-[70%] left-80 top-20" : menüType==="2" ? "w-[22%] h-[70%] left-60 top-30" : menüType==="3" ? "w-[40%] h-[40%] left-130 top-20" : "w-[22%] h-[70%] left-60 top-30"
        
        } `}>
            <h1 className='text-white'>merhaba bn Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam earum dolorum quae quos inventore tempore quod provident hic mollitia.</h1>
        </div>
    )}

    </>
    
    
  )
}

export default MenüSection