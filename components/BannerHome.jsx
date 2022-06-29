import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";


function BannerHome() {
  return (
  
  
  
  <>
   
  <div className="  ">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
      <Image
    src="/img/roj-klipp.jpg"
    className=" -z-[1001] "
    alt="berg"
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
   
        <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 cursor-pointer px-6  text-lg rounded-md w-full md:w-48 ">
          <Link href="/kontakt">Bli uppringd</Link>  
        </button>
      </div>

     <ul className="font-thin  leading-7">
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> Halva priset med RUT-avdrag</li>
<li className="flex items-center  mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span> Alltid försäkrad</span> </li>
<li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle/> </div> <span > Lokalt baserade </span> </li>



     </ul>
    </div>

 
   
  </div>
  

    
    </>
    
  );
}

export default BannerHome