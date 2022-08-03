

import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaPhoneAlt, FaRegCheckCircle } from 'react-icons/fa'
import { HiOutlineAnnotation, HiOutlineChatAlt2, HiUser } from 'react-icons/hi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { MdOutlineBedroomParent } from "react-icons/md";

import Cta from '@/components/Cta'
import SectionContainer from '@/components/SectionContainer'
import DDTradgardAkersberga from '@/components/DDTradgardAkersberga'
import { NextSeo } from 'next-seo'

const akersberga = () => {
    return (
        <>
            <NextSeo
                title="Trädgårdshjälp Åkersberga | Östanå Hemservice"
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

                            <h1 className=" text-4xl md:text-6xl md:font-normal">
                                Har du behov av trädgårdshjälp?
                            </h1>

                            <Cta />
                        </div>


                        <ul className=" font-extralight leading-7">
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Inga bindningstider</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Trädgårdshjälp med RUT-avdrag</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Alltid samma trädgårdsmästare  </span> </li>



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



                        <DDTradgardAkersberga />
                    </section>

                </SectionContainer>

            </div>

            <div className="  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/rialav-1st.webp"
                    className=" "
                    alt="trädgård,blomma, hemservice"
                    height={1099}
                    width={1914}




                />

            </div>
            <div className=" -mt-2  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/rialav-2nd.webp"
                    className=" "
                    alt="trädgård,blomma, hemservice"
                    height={1099}
                    width={1914}




                />

            </div>
            {/* 



            {/* DropDown 1 ***********************************/}

            {/* *************** Section 3 PINK ****************************/}

            <div className="py-2 -mt-2 relative h-36 bg-pink-bg">

                <h2 className=" text-center pt-10  text-3xl md:text-5xl">
                    Njut av en bekvämare vardag

                </h2>

            </div>






        </>
    )
}

export default akersberga




