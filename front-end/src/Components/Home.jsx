import React ,{useState , useEffect} from 'react'
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import Hero from "./Hero"
import MenüSection from "./MenüSection"

const Home = ({publicId}) => {
    const [open ,  setOpen]=useState(true);
    const [menü , setMenü]= useState(false);
    const [menüType,setMenüType]=useState("0")
    const [data, setData]=useState({})
    const [karakter, setKarakter]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:8000/users/${publicId}`)
        .then(res=>{
            if(!res.ok) console.log("get hata var")
                return res.json()
        })
        .then(data=>{
            console.log(data)
            setData(data)
    })
        .catch(e=>console.log("genel bir get istek hatası" + e))

    },[publicId])


  
  return (
    <div className="bg-[#000000] grid grid-cols-10 grid-rows-[70px_auto]">
      <Navbar open={open} setOpen={setOpen} />
      <SideBar open={open} data={data} setOpen={setOpen} menü={menü} setMenü={setMenü} setMenüType={setMenüType} karakter={karakter} setKarakter={setKarakter}/>
      <Hero open={open} setOpen={setOpen} data={data} karakter={karakter} setKarakter={setKarakter}/>
      <MenüSection menü={menü} setMenü={setMenü} open={open} menüType={menüType} karakter={karakter} setKarakter={setKarakter}/>
      </div>
  )
}

export default Home