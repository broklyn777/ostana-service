import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";


function BannerTradgard() {
  return (
  
  
  
  <>
   
  <div className="  ">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <div className="hidden md:block absolute top-0 bottom-0 -z-10 mx-auto max-w-[1920px] right-0 left-0 ">
      <Image
    src="/img/grasklippare.jpg"
    className=" -z-[1001] "
    alt="trädgårdshjälp"
    
   
    layout="fill"
    objectFit="cover"
    
  
    />

    </div>
    <div className="md:hidden absolute top-0 bottom-0 -z-10 mx-auto max-w-[1920px] right-0 left-0 ">
      <Image
    src="/img/applen01.jpg"
    className=" -z-[1001] "
    alt="trädgårdshjälp"
    
   
    layout="fill"
    objectFit="cover"
    
  
    />

    </div>
    
 

 <div className=" text-white px-8 py-16 mt-7 -z-20">
    
      <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">
     
        <h1 className=" text-4xl md:text-6xl md:font-normal">
        Har du behov av trädgårdshjälp?
        </h1>
   
        <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 cursor-pointer px-6  text-lg rounded-md w-48">
          <Link href="/om">Kontakta oss</Link>  
        </button>
      </div>

     <ul className=" font-extralight leading-7">
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span> Gröna fingrar </span> </li>
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span> Trädgårdshjälp med RUT-avdrag</span> </li>
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span> Alltid samma trädgårdsmästare  </span> </li>



     </ul>
    </div>

 
   
  </div>
  

    
    </>
    
  );
}

export default BannerTradgard