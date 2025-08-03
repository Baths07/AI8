import React , {useState , useEffect , useRef}  from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoSend } from "react-icons/io5";

let n=0;
const Hero = ({open,setOpen,karakter,setKarakter}) => {

    const test =[ 
       
        `Merhaba , kendini tanıma yolculuğuna başlamadan önce seni daha iyi tanımak için bir karakter testi uygulayalım.Aşağdaki soruları yönergelere göre puanla sonrasında ise beraber sohbete başlayalım.
        0. Kendimi üzüntülü ve sıkıntılı hissetmiyorum.
        1. Kendimi üzüntülü ve sıkıntılı hissediyorum.
        2. Hep üzüntülü ve sıkıntılıyım. Bundan kurtulamıyorum.
        3. O kadar üzüntülü ve sıkıntılıyım ki artık dayanamıyorum.`

       ,
       `
       0. Gelecek hakkında mutsuz ve karamsar değilim.\n
        1. Gelecek hakkında karamsarım.\n
        2. Gelecekten beklediğim hiçbir şey yok.\n
        3. Geleceğim hakkında umutsuzum ve sanki hiçbir şey düzelmeyecekmiş gibi geliyor.\n 
       `,
       `
        0. Kendimi başarısız bir insan olarak görmüyorum.
        1. Çevremdeki birçok kişiden daha çok başarısızlıklarım olmuş gibi hissediyorum.
        2. Geçmişe baktığımda başarısızlıklarla dolu olduğunu görüyorum.
        3. Kendimi tümüyle başarısız biri olarak görüyorum. 
       `,
       `
        0. Birçok şeyden eskisi kadar zevk alıyorum.
        1. Eskiden olduğu gibi her şeyden hoşlanmıyorum.
        2. Artık hiçbir şey bana tam anlamıyla zevk vermiyor.
        3. Her şeyden sıkılıyorum.       
       `,
       `
        0. Kendimi herhangi bir şekilde suçlu hissetmiyorum.
        1. Kendimi zaman zaman suçlu hissediyorum.
        2. Çoğu zaman kendimi suçlu hissediyorum.
        3. Kendimi her zaman suçlu hissediyorum. 
       `,
       `0. Bana cezalandırılmışım gibi geliyor.
        1. Cezalandırılabileceğimi hissediyorum.
        2. Cezalandırılmayı bekliyorum.
        3. Cezalandırıldığımı hissediyorum. 
        `,
        `
        0. Kendimden memnunum.
        1. Kendi kendimden pek memnun değilim.
        2. Kendime çok kızıyorum.
        3. Kendimden nefret ediyorum.      
        `,
        `
        0. Başkalarından daha kötü olduğumu sanmıyorum.
        1. Zayıf yanların veya hatalarım için kendi kendimi eleştiririm.
        2. Hatalarımdan dolayı ve her zaman kendimi kabahatli bulurum.
        3. Her aksilik karşısında kendimi hatalı bulurum. 
        `,
        `
        0. Kendimi öldürmek gibi düşüncelerim yok.
        1. Zaman zaman kendimi öldürmeyi düşündüğüm olur. Fakat yapmıyorum.
        2. Kendimi öldürmek isterdim.
        3. Fırsatını bulsam kendimi öldürürdüm
        `,
        `
        0. Her zamankinden fazla içimden ağlamak gelmiyor.
        1. Zaman zaman içinden ağlamak geliyor.
        2. Çoğu zaman ağlıyorum.
        3. Eskiden ağlayabilirdim şimdi istesem de ağlayamıyorum.   
        `,
        `
        - 0. Şimdi her zaman olduğumdan daha sinirli değilim.
        1. Eskisine kıyasla daha kolay kızıyor ya da sinirleniyorum.
        2. Şimdi hep sinirliyim.
        3. Bir zamanlar beni sinirlendiren şeyler şimdi hiç sinirlendirmiyor. 
        `,
        `
        0. Başkaları ile görüşmek, konuşmak isteğimi kaybetmedim.
        1. Başkaları ile eskiden daha az konuşmak, görüşmek istiyorum.
        2. Başkaları ile konuşma ve görüşme isteğimi kaybetmedim.
        3. Hiç kimseyle konuşmak görüşmek istemiyorum. 
        `,
        `
        0. Eskiden olduğu gibi kolay karar verebiliyorum.
        1. Eskiden olduğu kadar kolay karar veremiyorum.
        2. Karar verirken eskisine kıyasla çok güçlük çekiyorum.
        3. Artık hiç karar veremiyorum. 
        `,
        `
        0. Aynada kendime baktığımda değişiklik görmüyorum.
        1. Daha yaşlanmış ve çirkinleşmişim gibi geliyor.
        2. Görünüşümün çok değiştiğini ve çirkinleştiğimi hissediyorum.
        3. Kendimi çok çirkin buluyorum. 
        `,
        `
        0. Eskisi kadar iyi çalışabiliyorum.
        1. Bir şeyler yapabilmek için gayret göstermem gerekiyor.
        2. Herhangi bir şeyi yapabilmek için kendimi çok zorlamam gerekiyor.
        3. Hiçbir şey yapamıyorum
        `,
        `
        0. Her zamanki gibi iyi uyuyabiliyorum.
        1. Eskiden olduğu gibi iyi uyuyamıyorum.
        2. Her zamankinden 1-2 saat daha erken uyanıyorum ve tekrar uyuyamıyorum.
        3. Her zamankinden çok daha erken uyanıyor ve tekrar uyuyamıyorum
        `,
        `
         0. Her zamankinden daha çabuk yorulmuyorum.
        1. Her zamankinden daha çabuk yoruluyorum.
        2. Yaptığım her şey beni yoruyor.
        3. Kendimi hemen hiçbir şey yapamayacak kadar yorgun hissediyorum. 
        `,
        `
        0. İştahım her zamanki gibi.
        1. İştahım her zamanki kadar iyi değil.
        2. İştahım çok azaldı.
        3. Artık hiç iştahım yok. 
        `,
        `
        0. Son zamanlarda kilo vermedim.
        1. İki kilodan fazla kilo verdim.
        2. Dört kilodan fazla kilo verdim.
        3. Altı kilodan fazla kilo vermeye çalışıyorum. 
        `,
        `
        0. Sağlığım beni fazla endişelendirmiyor.
        1. Ağrı, sancı, mide bozukluğu veya kabızlık gibi rahatsızlıklar beni endişelendirmiyor.
        2. Sağlığım beni endişelendirdiği için başka şeyleri düşünmek zorlaşıyor.
        3. Sağlığım hakkında o kadar endişeliyim ki başka hiçbir şey düşünemiyorum. 
        `,
        `
         0. Son zamanlarda cinsel konulara olan ilgimde bir değişme fark etmedim.
        1. Cinsel konularla eskisinden daha az ilgiliyim.
        2. Cinsel konularla şimdi çok daha az ilgiliyim.
        3. Cinsel konular olan ilgimi tamamen kaybettim.
        `

    ]

    const [message , setMessage] = useState("");
    const [response , setResponse]=useState("");
    const [isResponseScreen , setisResponseScreen]= useState(false)
    const [isDepression , setIsDepression]=useState(true);
    const [number,setNumber]=useState(0);
    const [point,setPoint]=useState(0);
    const [DepStatus,setDepStatus]=useState("");
    const [messages , setMessages] =useState(
        [
        {
            text:null,
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
    const res = await fetch("http://localhost:8000/ai/entry", {
      method: 'POST', // HTTP yöntemi
      headers: {
        'Content-Type': 'application/json' // Gönderilen veri tipi
      },
      body: JSON.stringify({
        user_id: 101,
        text: message,
        user_prediction: DepStatus,
        timestamp: new Date().toISOString()
      }) // JSON verisini string'e çeviriyoruz
    });

    const data = await res.json();
    console.log('Gelen yanıt:', data);
    console.log(data.empathy)

    return data.empathy;
    
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

       useEffect(() => {
            if (!isDepression && DepStatus !== "") {
                setMessages([
                ...messages,
                
                { text: `Senin durumun : ${DepStatus} ki bu durumun genel olarak özellikleri şöyledir : Şiddetli depresyon, kişinin ruhsal, zihinsel ve bedensel sağlığını derinden 
                  etkileyen ciddi bir durumdur.
                   Bu kişiler kendilerini sürekli üzgün, boşlukta ve çökkün hissederler;
                    hiçbir şeyden zevk alamaz, hayata karşı ilgilerini kaybederler. 
                    Günlük aktiviteler zorlaşır, basit kararlar bile yorucu hale gelir. Uyku düzenleri bozulur; 
                    ya uykusuzluk çekerler ya da günün büyük kısmını uyuyarak geçirirler. İştahları değişir, kilo kaybı
                     ya da artışı yaşanabilir. Enerji eksikliği ve halsizlik yaygındır. Zihinsel bulanıklık, unutkanlık ve 
                     odaklanma güçlüğü görülür. Kendilerini değersiz hisseder, geçmişteki hatalar için aşırı suçluluk duyarlar.
                      Geleceğe dair karamsarlık baskındır, hiçbir şeyin düzelmeyeceğine inanabilirler. Bazı 
                      kişiler için ölüm düşünceleri ya da intihar isteği bile gündeme gelebilir.
                
                `, isBot: true }
                ]);
            }
            }, [DepStatus]);
                    
     const  handleSend= async (e)=>{

        e.preventDefault();

        if(isDepression){
            
        setisResponseScreen(true);
        setMessages([
            ...messages , 
            {
                text:message,
                isBot:false
            },
            {
                text: test[number],
                isBot:true
            }
        ]);

        const parsed = parseInt(message.trim());

        if (!isNaN(parsed)) {
        setPoint(p => p + parsed);
        }

       

        
        setNumber(p=>p+1)

        setMessage("");
        inputRef.current?.focus();

        if(number==21){
            console.log(point)
            setIsDepression(false);
            if(point<10) setDepStatus("Minimal Depresyon")
            else if (point >=10 && point<17) setDepStatus("Hafif depresyon")
            else if (point >=17 && point<30) setDepStatus("Orta depresyon")
            else if (point >=30 && point<64) setDepStatus("Şiddetli depresyon")

            setKarakter(true)


            
          }

        return;

        }

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
                                 text.text !==null && (text.isBot ?

                                    <div className='mr-auto  rounded-4xl mt-[40px] ml-[120px] break-words w-[60%]'>
                                        <p className='my-2 mx-6  text-[#ffffff] self-center '>
                                            {text.text}
                                        </p>
                                    </div>

                                  
                                  : <div className='break-words flex messages bg-[#626060] rounded-4xl mr-[300px] mt-[40px] ml-auto'>
                                    <p className='my-2 mx-6  text-[#ffffff] self-center '>
                                        {text.text}

                                    </p>
                                </div>
                                 )
                                
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
                            Emotia ile destel al.<br></br>Sorunlarını çöz. Kendini anla.
                        </p>

                        <p className="text-[#b7b6b6] mt-[16px] text-center text-wrap">
                            Empatia, duygularını anlamana ve yönetmene yardımcı olan yapay zekâ destekli dijital bir yol arkadaşıdır.
                             
                        </p>
                         <p className="text-[#b7b6b6] mt-[16px] text-center text-wrap">
                            Sessiz kalma, Empatia ile içini özgürce paylaş.
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