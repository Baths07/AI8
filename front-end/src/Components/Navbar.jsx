import React from 'react'
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({open , setOpen}) => {
  return (
    <nav className={ ` ${open ? "col-start-3 col-end-11" :
      "col-start-2 col-end-11"
    }`}  >                  
      <div className='container flex justify-end' >
        <div className='mt-[20px]  mr-[40px]'>
          <button className="text-2xl  flex gap-2.5 px-8 py-2 hover:bg-amber-200 rounded-4xl ">
            <MdAccountCircle className="text-white text-[29px]" />
            <p className="text-white text-[20px] self-center font-semibold">Hesap</p>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar