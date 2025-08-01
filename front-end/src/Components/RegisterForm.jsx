import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const RegisterForm = ({publicId,setPublicId}) => {

    const navigate = useNavigate();

    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [email,setEmail]=useState(null);
    const [age,setAge]=useState(null);
    const [password,setPassword]=useState("");
    const [isRegister,setRegister]=useState(true);
    const [error,setError]=useState(false);
    

  const handleForm = (event)=>{
    event.preventDefault();

    fetch("http://localhost:8000/users/" ,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        isim:name,
        soyisim:surname,
        email:email,
        yas:age,
        password:password
      })
    }).then(res=>{
      if(!res.ok){
        console.log("bir sorun fetch de yaşandı")
        return;
      }

      return res.json()
    })
    .then(data=>{
      console.log(data)
      setPublicId(data.publicId)
      navigate("/")
      console.log(publicId)
    })
    .catch(e=>console.log("genel hata" +e))
    


  }

  const handleLogin = (event)=>{
    event.preventDefault();

    fetch("http://localhost:8000/auth/login" ,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({    
        email:email,
        password:password
      })
    }).then(res=>{
      if(!res.ok){
        console.log("LOGIN :bir sorun fetch de yaşandı")
        return;
      }

      return res.json()
    })
    .then(data=>{
      console.log(data)
      if(data.message==="Login successful" ){
        console.log(data)
        setPublicId(data.user.publicId)
        navigate("/")
        console.log(publicId)
        return ;
      }
      console.log("****")
      setError(true);
      
    })
    .catch(e=>console.log("LOGIN :genel hata" +e))
    


  }



  return (
    <div className='flex'>
      <div className="bg-[#00002e] w-[75%] h-screen flex-col">
        <p className='text-[38px] text-[#cc98fd] mt-2 ml-16 font-semibold'>
          Emotia
        </p>

        <p className='text-[50px] text-[#cc98fd] mt-40 ml-25 font-bold'>
          duygusal destek asistanı.
        </p>

        <p className='text-[25px] text-[#cc98fd] mt-4 ml-25 '>
          her zaman yanında olan bir arkadaş.
        </p>

      </div>

      {
        isRegister 
        ? 
        <div className="bg-[#000000] h-screen w-[40%] flex flex-col justify-center">
        <p className="text-[40px] text-[#FFFFFF] ml-20 mt-2  ">kayıt ol.</p>
         <form className='flex flex-col gap-5 itemss-center mt-14 items-center' onSubmit={handleForm}>
            
          <input type="text" placeholder='İsim' onChange={(e)=>setName(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2" />
          <input type="text" placeholder='Soyad' onChange={(e)=>setSurname(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2"  />
          <input type="text" placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2"   />
          <input type="text" placeholder='Yaş' onChange={(e)=>setAge(e.target.value)} className="bg-[#ccd5ae] rounded-2xl w-[70%] p-2"   />
          <input type="text" placeholder='Şifre' onChange={(e)=>setPassword(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2"   />
           <button type='submit' className='text-[#FFFFFF] font-semibold py-2 w-[30%] rounded-3xl border-2 border-white'>kaydet</button>

          
        </form>

        <div className='flex justify-between  mt-8 mr-18'>
         <div className="flex-col ml-10">
           <p className='self-center text-[#e9edc9]'>Hesabın var mı?</p> 
          <button className='text-[16px] text-[#00b4d8] ml-4 ' onClick={()=>setRegister(false)}>Giriş Yap</button>
         </div>
       
         
        </div>
      </div>
        
        
        :
      
        <div className="bg-[#000000] h-screen w-[40%] flex flex-col justify-center">
        <p className="text-[40px] text-[#FFFFFF] ml-20 mt-2  ">giriş yap.</p>
         <form className='flex flex-col gap-5  mt-14 items-center' onSubmit={handleLogin}>
            
         
          <input type="text" placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2"   />
          <input type="text" placeholder='Şifre' onChange={(e)=>setPassword(e.target.value)} className="bg-[#ccd5ae] rounded-2xl  w-[70%] p-2"   />
          
          {
          error ?
          <div className="bg-red-500 rounded-xl ">
            <p className='text-[#FFFFFF] py-2 px-4'>E-mail veya şifre bilgisi hatalı</p>
          </div> 
          : null

         }
         
             <button type='submit'  className='text-[#FFFFFF] self-end  mt-8 mr-18 font-semibold  py-2 w-[30%] rounded-3xl border-2 border-white'>giriş yap</button>
        </form>

          

       
     
       
      </div>
        
        
     

      }
       
    </div>
  )
}

export default RegisterForm