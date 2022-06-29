import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { GiClothesline, GiHammerNails, GiRake, GiVacuumCleaner, GiVibratingSmartphone, GiWalk } from 'react-icons/gi'

const ServiceOm = () => {
  return (
     <section className="pb-10">
          <div className="text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
            <h2 className="pt-2 text-3xl md:text-5xl">
              Vill du veta mer om våra olika tjänster?
            </h2>
            <div>
              <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
            </div>
            <div className=" mx-auto text-center max-w-2xl ">
              <p > Vi hjälper dig med ditt hem och tomt. klipper gräs, häckar, buskar, blåser löv, rensar ogräs och röjer sly mm. RUT och ROT. Alltid samma person.</p>
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
  )
}

export default ServiceOm