import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { GiBeachBucket, GiClothesline, GiGardeningShears, GiHammerNails, GiRake, GiVacuumCleaner, GiVibratingSmartphone, GiWalk } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

import BannerHome from '../components/BannerHome'
import DropHome from '../components/DropHome'
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
            <h2 className="pt-10  text-3xl md:text-5xl">
              Vad vill du ha hjälp med?
            </h2>
            <div>
              <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
            </div>
            <div className=" mx-auto text-center max-w-2xl ">
              <p >Ibland är måstena för många och timmarna för få. Därför finns Östanå. Vi hjälper dig med allt ifrån städning till enklare hantverk!</p>
            </div>
          </div>

          <ul className="text-gray-text grid grid-cols-1 gap-6 sm:grid-cols-2 text-2xl mt-8 font-[400] px-8  ">




            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tradgard'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center flex:none"> <GiRake /> </div> <span className="flex-1"> Trädgård </span> <span className="text-gray-700 font-thin text-xl ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/stadning'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiVacuumCleaner /> </div> <span className="flex-1" > Städning </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiClothesline /> </div> <span className="flex-1" > Seniorhjälp </span> <span className="text-gray-700 text-lg ml-4">  <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiHammerNails /> </div> <span className="flex-1" > Hantverkshjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>
            <li className=" border-b-2 border-gray-light pb-2 items-center ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiVibratingSmartphone /> </div> <span className="flex-1" > IT & Datahjälp </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>

            <li className=" border-b-2 border-gray-light pb-2 items-center grid grid-flow-row ">   <Link href='/tjanster'>
              <a className='flex items-center'>
                <div className="mr-6 w-8 h-8 items-center"> <GiWalk /> </div> <span className="flex-1" > Övrigt </span> <span className="text-gray-700 text-lg ml-4"> <FaAngleRight /> </span>
              </a>
            </Link>
            </li>



          </ul>


        </section>

      </SectionContainer>

      {/* *************** Section 3 PINK ****************************/}

      <div className="py-2 relative bg-blue-bg ">
        <SectionContainer>

          <section className=" max-w-[400px] sm:max-w-none">
            <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
              <h2 className=" text-center py-10 text-3xl lg:text-5xl">
                Varför Östanå Hemservice?

              </h2>
              <div>
                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
              </div>

              {/* flexbox LIST ****************/}
              <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><HiOutlineChatAlt2 />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Samtal</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Berätta för oss vad du vill ha hjälp med så återkommer vi till dig med ett prisförslag.</p>
                  </div>
                </li>
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><GiBeachBucket />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Arbetsplan</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Tillsammans kommer vi överens om skötselplan och tidsåtgång, så att vi kan möta dina önskemål på bästa sätt.</p>
                  </div>
                </li>
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><GiGardeningShears />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Kontinuerligt underhåll</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Samma trädgårdsarbetare återkommer för att hålla trädgården i trim</p>
                  </div>
                </li>

              </ul>
            </div>







          </section>

        </SectionContainer>
      </div>
      <div className=" mx-auto -z-10 max-w-[1920px] ">
        <Image
          src="/img/blomma003.png"
          className=" "
          alt=""
          height={1099}
          width={1914}




        />

      </div>
      <div className="py-2 -mt-2 relative bg-pink-bg ">
        <div className="px-8">
          <DropHome />
        </div>
      </div>







    </>
  )
}

export default Home