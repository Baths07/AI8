import React , {useState , useEffect , useRef}  from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoSend } from "react-icons/io5";

let n=0;
const Hero = ({open,setOpen}) => {

    const [message , setMessage] = useState("");
    const [response , setResponse]=useState("");
    const [isResponseScreen , setisResponseScreen]= useState(false)
    const [messages , setMessages] =useState(
        [
        {
            text: null ,
            isBot:false
        },
        {
            text:null,
            isBot:true
        }

    ]
    ) ;

      const bottomRef = useRef(null);

       useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [messages]);


        const inputRef = useRef(null);

        //fetch
        async function postData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // HTTP yöntemi
      headers: {
        'Content-Type': 'application/json' // Gönderilen veri tipi
      },
      body: JSON.stringify({
        body: message,
        userId: 1
      }) // JSON verisini string'e çeviriyoruz
    });

    const data = await res.json();
    console.log('Gelen yanıt:', data);
    return data.body;
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
}
        
/*
         async function fetchData(){
            n += 1;
            try{
                const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${n}`);
                if(!response.ok){
                    throw new Error("could not fetch resuorces")
                }

                const data=await response.json();
                console.log(data)
                return data.title;
                
                
            }catch(err){
                console.error(err)
            }
        }

        */

     const  handleSend= async (e)=>{

        e.preventDefault();

        let res = await postData();

        setisResponseScreen(true);
        setMessages([
            ...messages , 
            {
                text:message,
                isBot:false
            },
            {
                text: res,
                isBot:true
            }
        ]);

        setMessage("");
        inputRef.current?.focus();

     }



  return (
        <div className={ ` z-10 flex flex-col justify-start row-start-2 row-end-11 
            ${
            open ? "col-start-3  col-span-11 " : "col-start-2 col-span-11" } `
            }>
        {
            isResponseScreen ? 
            <div className="flex flex-col ">
                <div className="flex flex-col ml-auto w-full h-[60vh] 	overflow-y-auto">
                                     
                            {messages.map((text,i) => 
                                 text.isBot ?

                                    <div className='mr-auto  rounded-4xl mt-[40px] ml-[120px] break-words'>
                                        <p className='my-2 mx-6  text-[#ffffff] self-center '>
                                            {text.text}
                                        </p>
                                    </div>

                                  
                                  : <div className='break-words flex messages bg-[#626060] rounded-4xl mr-[300px] mt-[40px] ml-auto'>
                                    <p className='my-2 mx-6  text-[#ffffff] self-center '>
                                        {text.text}

                                    </p>
                                </div>
                                
                            )}

                            {/* Otomatik scroll hedefi */}
                                <div ref={bottomRef} />

                            
                       
                    

                 
                </div>

                <div>

                    <div className='justify-center mt-[85px] flex items-end'>
                        <div className='relative w-[80%]'> 
                            <form onSubmit={handleSend}>
                                <input type="text" ref={inputRef} value={message} onChange={(e)=>{setMessage(e.target.value)}} className='bg-[#696666]  pl-4 py-[12px] rounded-2xl  w-[80%]
                                placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#D5D5D5] self-center' 
                                placeholder='Bugün Nasıl Hissediyorsun?'/>
                                {

                                message== "" ? "" : 
                                <button type="submit" className={ `absolute top-1/4 ${ open ? "right-[195px]" : "right-[220px]"} `}  ><IoSend  size={20} className='text-white '/> </button>
                            
                                }
                            </form> 
                        </div>
                    </div>


                </div>
              

            </div>
            //
          
        
            : <>
                <div className='  flex-col justify-center mt-[20px] ' >
                    <div className=''>
                        <h4 className=" text-center text-[16px] font-semibold text-[#B2ADAD]">Empatia</h4>
                    </div>

                    <div>
                        <p className="text-[#FFFFFF] mt-[10px] text-center text-[44px] font-semibold">
                            Emotia ile destel al.<br></br>Sorunlarını çöz. Kendini al.
                        </p>

                        <p className="text-[#b7b6b6] mt-[16px] text-center text-wrap">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Expedita a ut, aut accusamus esse placeat enim temporibus harum unde nesciunt praesentium 
                            totam ad id commodi cum eos maxime sunt vitae.
                        </p>
                    </div>

                </div>

                <div className="flex justify-center  mt-[60px] gap-[40px]">
                    <button  className='bg-white flex py-3 px-5 rounded-3xl hover:bg-[#919090] group
                    transition-colors duration-400 ease-in-out'>
                        <p className='text-[16px] font-semibold'> Karakter Testine Başla  </p>
                        <GoArrowUpRight size={20} className='self-center'/>
                        
                        
                    </button>
                    <button className=" flex justify-center gap-[2px] hover:text-[#5B5757] group">
                        <p className='text-[16px] font-semibold text-[#FFFFFF] py-3 pl-5 group-hover:text-[#5B5757] 
                        transition-colors duration-300 '>Günlük Sohbete Başla </p>
                        <IoIosArrowForward size={40}  className='self-center text-white group-hover:text-[#5B5757]
                        transition-colors duration-300'/>

                    </button>
                </div>

                
                <div className='justify-center mt-[85px] flex   '>
                    <div className='relative w-[80%]'>
                        <form onSubmit={handleSend}>
                            <input type="text" ref={inputRef} onChange={(e)=>{setMessage(e.target.value)}} className='bg-[#696666]  pl-4 py-[12px] rounded-2xl  w-[80%]
                            placeholder:text-[14px] placeholder:font-semibold placeholder:text-[#D5D5D5] self-center' 
                            placeholder='Bugün Nasıl Hissediyorsun?'/>
                            {
                            message== "" ? "" : 
                            <button type="submit" className='absolute right-[195px] top-1/4 '><IoSend  size={20} className='text-white '/> </button>
                            
                        }
                        </form> 
                    </div>
                </div>
            </>
        }

        
        </div>
    
  )
}

export default Hero