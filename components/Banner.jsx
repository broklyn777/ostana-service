import Image from "next/image";
import Link from "next/link";


function Banner() {
  return (
  
  
  
  <>
  <div className="  ">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <div className="absolute top-0 -z-10 mx-auto max-w-[1920px] h-[70vh] w-screen">
      <Image
    src="/img/roj-klipp.jpg"
    className=" -z-[1001] "
    alt="berg"
    priority
   
    layout="fill"
    objectFit="cover"
    
  
    />

    </div>
    
 

 <div className=" text-white px-8 py-16 mt-7 -z-20">
    
      <div className=" max-w-xl grid grid-cols-1 gap-8">
     
        <h1 className=" text-4xl md:text-6xl md:font-bold">
          Välkommen till Östanå FixTrix! 
        </h1>
   
        <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 cursor-pointer px-6  text-lg rounded-md w-48">
          <Link href="/kontakt">Bli uppringd</Link>  
        </button>
      </div>
    </div>

 
   
  </div>
  
  
    
    </>
    // </div>
  );
}

export default Banner