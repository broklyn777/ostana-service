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
import BannerHome from '../components/BannerHome'

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

                            <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 cursor-pointer px-6  text-lg rounded-md w-48">
                                <Link href="/om">Kontakta oss</Link>
                            </button>
                        </div>

                        <ul className="">
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Hjälp i lugn och ro</span> </li>
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

            <div className="py-2 relative  bg-pink-bg">
                <SectionContainer>

                    <section className=" max-w-[400px] sm:max-w-none">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
                            <h2 className=" text-center pt-10  text-3xl md:text-5xl">
                                3 steg till en enklare vardag

                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>

                            {/* flexbox LIST ****************/}
                            <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-pink-bg-soft text-6xl"
                                    ><HiOutlineChatAlt2 />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">STARTMÖTE</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p>På ett fysiskt eller ett digitalt möte berättar du för oss vad du vill ha hjälp med och hur du vill ha det gjort.</p>
                                    </div>
                                </li>
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-pink-bg-soft text-6xl"
                                    ><GiVacuumCleaner />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">STARTSTÄDNINGEN</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p>Vi börjar ofta med en grundlig städning - för att ge ditt hem en så bra start som möjligt helt enkelt!</p>
                                    </div>
                                </li>
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-pink-bg-soft text-6xl"
                                    ><MdOutlineBedroomParent />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">NJUT AV DITT RENA HEM!</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p>Du kan använda abonnemangets timmar till andra saker också, t.ex.fönsterputs, tvätt...med mera!.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>







                    </section>

                </SectionContainer>

            </div>






        </>
    )
}

export default itData




