import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../components/Banner'
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';
import { GiRake } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa';
import { IconContext } from "react-icons";


export default function Home() {
  return (
    <>

      <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8 h-[70vh] text-white py-16 relative">
        <Banner />

      </div>
      <SectionContainer>
        <section className="">
          <div className=" grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
            <h2 className="  text-3xl md:text-5xl">
              Vad vill du ha hjälp med?
            </h2>
            <div>
              <p className=" border-2 rounded-xl border-green-600 mx-auto max-w-[72px]"></p>
            </div>
            <div className=" mx-auto text-center">
              <p >Ibland är måstena för många och timmarna för få. Därför finns Östanå. Vi hjälper dig med allt ifrån städning till enklare hantverk!</p>
            </div>
          </div>

          <ul className=" grid grid-cols-1 gap-6 sm:grid-cols-2 text-2xl mt-8   ">




            <li className=" border-b-2 border-green-200 pb-2 items-center ">   <Link href='/tradgard'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span> Trädgård </span> <span className="text-gray-700 font-thin text-lg ml-4"> <FaArrowRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-green-200 pb-2 items-center ">   <Link href='/stadning'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span> Städning </span> <span className="text-gray-700 text-lg ml-4"> <FaArrowRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-green-200 pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span> Seniorhjälp </span> <span className="text-gray-700 text-lg ml-4">  <FaArrowRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-green-200 pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span> Hantverkshjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaArrowRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-green-200 pb-2 items-center flex ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <div className="flex"><span> IT & Datahjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaArrowRight /> </span></div>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-green-200 pb-2 items-center grid grid-flow-row ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span> Övrigt </span> <span className="text-gray-700 text-lg ml-4"> <FaArrowRight /> </span>
              </a>
            </Link>
            </li>



          </ul>



          {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-8 ">
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
          </div> */}

        </section>
      </SectionContainer>



    </>

  );
}
