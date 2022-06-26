import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../components/Banner'
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';


export default function Home() {
  return (
    <>

      <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8 h-[70vh] text-white py-16 relative">
        <Banner />

      </div>
      <SectionContainer>
        <div className=" grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
          <h2 className="  text-3xl md:text-5xl">
            Vad vill du ha hjälp med?
          </h2>
          <div>
            <p className=" border-2  border-gray-400 mx-auto max-w-[72px]"></p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p >Ibland är måstena för många och timmarna för få. Därför finns Östanå. Vi hjälper dig med allt ifrån städning till enklare hantverk!</p>
          </div>

          <div className="divide-y grid grid-cols-1 gap-4  divide-dashed">

            <div className="text-xl"></div>
            <div className="text-left   text-xl">Seniorhjälp</div>
            <div className="text-xl">02</div>
            <div className="text-xl">02</div>
            <div className="text-xl">02</div>

          </div>



          <div>
            <p className=" border-[1px]  border-gray-100 mx-auto max-w-[572px]"></p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-8 ">
            <div>
              <h3 className="text-2xl font-normal mb-2">Seniorhjälp?</h3>
              <p className="text-lg">
                Det kan vara stort som smått, som att sy en knapp och sortera bokhyllan till att laga alla mål mat eller vara en ledande hand på promenaden i parken.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-2">Våra trädgårdstjänster</h3>
              <p className="text-lg">
                Klippa gräs, rensa rabatter, kratta löv och beskära fruktträd? Självklart, det fixar vi! Boka ett engångsuppdrag eller prenumerera på vår trädgårdshjälp under hela säsongen.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>



    </>

  );
}
