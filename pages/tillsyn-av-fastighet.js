/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt, FaRegCheckCircle } from 'react-icons/fa'
import { HiOutlineAnnotation, HiOutlineChatAlt2, HiUser } from 'react-icons/hi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { MdOutlineBedroomParent } from "react-icons/md";
import DropTillsyn from '../components/DropTillsyn'

import SectionContainer from '../components/SectionContainer'
import DropDownTillsyn from '../components/DropDownTillsyn'
import { NextSeo } from 'next-seo'

const TillsynAvFastighet = () => {
    return (
        <>
            <NextSeo
                title="Tillsyn av fastighet | Österåker & Norrtälje Kommun"
                description="Tillsyn av fastighet med regelbundna rapporter. Vi ser över fönster, tak, fasad, utemöbler, spolar kranar och toaletter, kontrollerar att dörrar är låsta."
                openGraph={{
                    title: "Vi erbjuder hustillsyn under hela säsongen.",
                }}
            />
            {/******************* Banner ************/}
            <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">

                <div className="  ">
                    {/* <div className=" text-white " style={backgroundImageStyle}> */}
                    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
                        <Image
                            src="/img/house_1920.jpg"
                            className=" -z-[1001] "
                            alt="Tillsyn av fastighet åkersberga, ljusterö och norrtälje"
                            priority

                            layout="fill"
                            objectFit="cover"


                        />

                    </div>



                    <div className=" text-white px-8 py-16 mt-7 -z-20">

                        <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">

                            <h2 className=" tracking-tight text-4xl md:text-6xl md:font-normal">
                                Behöver du någon som ser till din fastighet?
                            </h2>
                            <div className="pb-5  text-center">
                                <button className=" grid grid-cols-3 gap-2 items-center text-center bg-gradient-to-r from-pink-600 to-orange-600 py-2 cursor-pointer px-3 text-lg rounded-md   ">
                                    <div className=" text-3xl">
                                        <FaPhoneAlt className="" />
                                    </div>
                                    <div className="col-span-2 ">
                                        <p>Björn Jansson</p>
                                        <Link href="tel:0706898999">070-689 89 99</Link>

                                    </div>

                                </button>
                            </div>

                        </div>

                        <ul className="">
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Alltid Försäkrat</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Anpassat efter dina behov</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Lokalt baserade. Alltid nära dig</span> </li>



                        </ul>
                    </div>



                </div>

            </div>

            {/* *************** Section ****************************/}



            <div className="py-2   bg-gray-light">
                <SectionContainer>

                    <section className="">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
                            <h1 className="pt-10  text-3xl md:text-5xl">
                                Tillsyn av fastighet! Vad ingår?


                            </h1>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>
                            <div className=" mx-auto text-center max-w-2xl">


                                <p>
                                    Vi har olika abonnemang för hustillsyn där du väljer efter dina behov. Du kan välja att vi ser till din fastighet endast från utsidan eller även invändigt? Kanske behöver du dessutom hjälp med gräsklippning, lövkrattning, snöskottning eller något annat? </p>




                            </div>
                        </div>



                        <DropDownTillsyn />
                    </section>

                </SectionContainer>

            </div>
            {/* 



            {/* DropDown 1 ***********************************/}

            {/* *************** Section 3 PINK ****************************/}

            <div className="py-2 relative h-36 bg-pink-bg">

                <h2 className=" text-center pt-10  text-3xl md:text-5xl">
                    Njut av en tryggare vardag

                </h2>

            </div>






        </>
    )
}

export default TillsynAvFastighet




