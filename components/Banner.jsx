import Image from "next/image";


function Banner() {
  return (
  
  
  
  <>
  <div className="-mt-20  md:mt-0">
    {/* <div className=" text-white " style={backgroundImageStyle}> */}
    <Image
    src="/img/roj-klipp.jpg"
    className="absolute -z-10"
    alt="berg"
    layout="fill"
    objectFit="cover"
  
    />
    <div className="bg-gradient-to-r from-black text-white px-8 py-16 -z-10">
    
      <div className=" max-w-xl grid grid-cols-1 gap-8">
        <div className="w-12">

        </div>
        <h2 className="text-xl uppercase font-bold">Behöver du hjälp?</h2>
        <h1 className="text-6xl font-bold">
          Välkommen till Östanå FixoTrix!
        </h1>
        <p className="text-lg">
        Vi hjälper dig till en enklare vardag!  


        </p>
        <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
            Bli uppringd 
        </button>
      </div>
    </div>
  </div><div className="px-8 text-white py-16">
      <div className="max-w-md mb-16">
        <h2 className="text-5xl">
        Vad vill du ha hjälp med?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <h3 className="text-2xl font-bold mb-2">Seniorhjälp?</h3>
          <p className="text-lg">
          Det kan vara stort som smått, som att sy en knapp och sortera bokhyllan till att laga alla mål mat eller vara en ledande hand på promenaden i parken.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Våra trädgårdstjänster</h3>
          <p className="text-lg">
          Klippa gräs, rensa rabatter, kratta löv och beskära fruktträd? Självklart, det fixar vi! Boka ett engångsuppdrag eller prenumerera på vår trädgårdshjälp under hela säsongen.
          </p>
        </div>
      </div>
    </div></>
    // </div>
  );
}

export default Banner