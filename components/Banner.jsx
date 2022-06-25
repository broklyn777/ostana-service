import Image from "next/image";
import Link from "next/link";


function Banner() {
  return (
  
  
  
  <>
  <div className="">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
      <Image
    src="/img/roj-klipp.jpg"
    className=" -z-[1001] "
    alt="berg"

layout="fill"
    objectFit="cover"
  
    />

    </div>
    
 
  <div className="h-96">
 <div className=" text-white px-8 py-16 -z-20">
    
      <div className=" max-w-xl grid grid-cols-1 gap-8">
        <div className="w-12">

        </div>
        <h1 className=" text-4xl md:text-6xl md:font-bold">
          Välkommen till Östanå FixoTrix! 
        </h1>
   
        <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 cursor-pointer px-6  text-lg rounded-md w-48">
          <Link href="/kontakt">Bli uppringd</Link>  
        </button>
      </div>
    </div>

  </div>
   
  </div>
  
  
    
    </>
    // </div>
  );
}

export default Banner