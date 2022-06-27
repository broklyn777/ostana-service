import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { GiRake } from 'react-icons/gi'
import Banner from '../components/Banner'
import BannerHome from '../components/BannerHome'
import SectionContainer from '../components/SectionContainer'

const Home = () => {
  return (
    <>
      <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">
        <BannerHome />
      </div>


      <SectionContainer>
        <section className="">
          <div className="text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
            <h2 className="  text-3xl md:text-5xl">
              Vad vill du ha hjälp med?
            </h2>
            <div>
              <p className=" border-[1px] rounded-xl border-green-700 mx-auto max-w-[72px]"></p>
            </div>
            <div className=" mx-auto text-center max-w-2xl ">
              <p >Ibland är måstena för många och timmarna för få. Därför finns Östanå. Vi hjälper dig med allt ifrån städning till enklare hantverk!</p>
            </div>
          </div>

          <ul className="text-gray-text grid grid-cols-1 gap-6 sm:grid-cols-2 text-2xl mt-8 font-[400]   ">




            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tradgard'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center flex:none"> <GiRake /> </div> <span className="flex-1"> Trädgård </span> <span className="text-gray-700 font-thin text-xl ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/stadning'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span className="flex-1" > Städning </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span className="flex-1" > Seniorhjälp </span> <span className="text-gray-700 text-lg ml-4">  <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span className="flex-1" > Hantverkshjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span className="flex-1" > IT & Datahjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>

            <li className=" border-b-2 border-gray-light pb-2 items-center grid grid-flow-row ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiRake /> </div> <span className="flex-1" > Övrigt </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
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

      </SectionContainer></>
  )
}

export default Home