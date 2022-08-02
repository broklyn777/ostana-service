/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaRegCheckCircle } from 'react-icons/fa'
import { HiOutlineAnnotation, HiOutlineChatAlt2, HiUser } from 'react-icons/hi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { MdOutlineBedroomParent } from "react-icons/md";


import SectionContainer from '../components/SectionContainer'
import DropDownDataIt from '../components/DropDownDataIt'
import { NextSeo } from 'next-seo'
import BannerDataIt from '../components/BannerDataIt'
import BannerDataItTopp from '../components/BannerDataItTopp'

const itData = () => {
    return (
        <>
            <NextSeo
                title="Datorhjälp | Problemfri IT-vardag | Östanå Hemservice"
                description="Behöver du hjälp med datorn? Vi hjälper dig till en problemfri IT-vardag. Dator och mobilhjälp i lugn och ro hemma hos dig. Även rådgivning."
                openGraph={{
                    title: "Vi erbjuder Datorhjälp under hela säsongen.",
                }}
            />
            {/******************* Banner ************/}
            <BannerDataItTopp />


            {/* *************** Section ****************************/}



            <div className="py-2   bg-gray-light">
                <SectionContainer>

                    <section className="">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
                            <h2 className="pt-10  text-3xl md:text-5xl">


                                Behöver du hjälp med datorn? Vi hjälper dig till en problemfri IT-vardag
                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>
                            <div className=" mx-auto text-center max-w-2xl">


                                <p>
                                    Vi vet hur jobbigt det kan vara med dator, datorer, skrivare, mobiltelefon, TV apparat eller annan IT utrustning som inte fungerar som man vill. Här är lite av vad vi kan hjälpa dig med vid ett hembesök.
                                </p>




                            </div>
                        </div>

                        {/* DropDown 1 ***********************************/}

                        <DropDownDataIt />
                    </section>

                </SectionContainer>

            </div>
            {/*^^^^^********************* circle video img section ^^^***************************/}


            {/* <div className=" mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/man-i-tradgard.png"
                    className=" "
                    alt="tillsyn av fastighet"
                    height={1099}
                    width={1914}




                />

            </div> */}


            <div className=" md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">
                <BannerDataIt />
            </div>

            {/* *************** Section 3 PINK ****************************/}

            {/* <div className="py-2 relative  bg-pink-bg">
                <SectionContainer>

                    <section className=" max-w-[400px] sm:max-w-none">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
                            <h2 className=" text-center pt-10  text-3xl md:text-5xl">
                                3 steg till en enklare vardag

                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>


                        </div>







                    </section>

                </SectionContainer>

            </div> */}






        </>
    )
}

export default itData




