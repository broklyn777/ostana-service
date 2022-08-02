/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import Cta from "./Cta";
import { FaPhone, FaPhoneAlt, FaRegCheckCircle } from "react-icons/fa";


function BannerHome() {
  return (
  
  
  
  <>
   
  <div className="  ">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
      <Image
    src="/img/rojning.webp"
    className=" -z-[1001] "
    alt="östanå Hemservice"
    priority
   
    layout="fill"
    objectFit="cover"
    
  
    />

    </div>
    




 <div className="text-center md:text-left text-white px-8 py-16 mt-7 -z-20">
    
      <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">
     
        <h1 className=" text-4xl md:text-6xl md:font-normal">
          Välkommen till Östanå Hemservice! 
        </h1>
 
        
      

  
      </div>
     
 <Cta/>

     <ul className="font-thin  leading-7">
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div>Hemservice med RUT-avdrag</li>
<li className="flex items-center  mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span> Alltid försäkrad</span> </li>
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span > Lokalt baserade </span> </li>



     </ul>
    </div>

 
   
  </div>
  

    
    </>
    
  );
}

export default BannerHome