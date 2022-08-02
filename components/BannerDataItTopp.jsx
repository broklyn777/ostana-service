import Image from 'next/image'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import Cta from './Cta'

export default function BannerDataItTopp() {
  return (
           <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">

                <div className="  ">
                    {/* <div className=" text-white " style={backgroundImageStyle}> */}
                    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
                        <Image
                            src="/img/samsung.png"
                            className=" -z-[1001] "
                            alt="Datahjälp, hjälp med mobiltelefon"
                            priority

                            layout="fill"
                            objectFit="cover"


                        />

                    </div>

                    <div className=" text-white px-8 py-16 mt-7 -z-20">

                        <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">

                            <h1 className=" tracking-tight text-4xl md:text-6xl md:font-normal">
                                Datorhjälp när det passar dig!

                            </h1>

               
                        </div>
<Cta/>
                        <ul className="">
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Hjälp i lugn och ro</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Anpassat efter dina behov</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Lokalt baserade. Alltid nära dig</span> </li>



                        </ul>
                    </div>



                </div>

            </div>
  )
}
