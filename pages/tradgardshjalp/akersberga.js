

import Image from 'next/image'
import Link from '@/components/Link'
import { FaRegCheckCircle } from 'react-icons/fa'



import Cta from '@/components/Cta'
import SectionContainer from '@/components/SectionContainer'
import DDTradgardAkersberga from '@/components/DDTradgardAkersberga'
import { NextSeo } from 'next-seo'

const akersberga = () => {
    return (
        <>
            <NextSeo
                title="Trädgårdshjälp i Åkersberga, Österåker | Östanå Hemservice"
                description="Behöver du trädgårdshjälp i Åkersberga? Östanå Hemservice hjälper dig. Vi fräser stubbar, krattar löv, vattnar, klipper gräsmattor mm. Även trädfällning."
                openGraph={{
                    title: "Vi erbjuder trädgårdshjälp i åkersberga under hela säsongen.",
                }}
            />
            {/******************* Banner ************/}
            <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">

                <div className="  ">
                    {/* <div className=" text-white " style={backgroundImageStyle}> */}
                    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
                        <Image
                            src="/img/tr-akersberga-01.webp"
                            className=" -z-[1001] "
                            alt="trädgårdshjälp åkersberga"


                            layout="fill"
                            objectFit="cover"


                        />

                    </div>




                    <div className=" text-white px-8 py-16 mt-7 -z-20">

                        <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">

                            <h1 className=" text-4xl md:text-6xl md:font-normal">
                                Trädgårdshjälp i Åkersberga
                            </h1>

                            <Cta />
                        </div>


                        <ul className=" font-extralight leading-7">
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Inga bindningstider</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Trädgårdshjälp med RUT-avdrag</span> </li>
                            <li className="flex items-center mb-4 leading-5"><div className="pr-2"><FaRegCheckCircle /> </div> <span> Lokalt baserade  </span> </li>



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
                                Har du behov av trädgårdshjälp?


                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>
                            <div className=" mx-auto text-center max-w-2xl">


                                <p>
                                    Östanå Hemservice erbjuder bekymmersfri vardag med vår trädgårdshjälp i Åkersberga med omnejd.Vi hjälper er med att klippa gräs, blåsa och kratta löv eller ihopsamling av trädgårdsavfall här i Åkersberga och Österåkers kommun. Vi har alltid med oss alla maskiner och redskap som behövs och vi tar med oss avfallet ifall ni önskar. <span className=""> Björn Jansson
                                        <Link className="text-orange-600 font-medium" href="tel:0706898999"  > 070-689 89 99</Link></span>

                                </p>




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
                    alt="trädgårdshjälp åkersberga, gräsröjning"
                    height={1099}
                    width={1914}




                />

            </div>
            <div className=" -mt-2  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/rialav-2nd.webp"
                    className=" "
                    alt="trädgårdshjälp österåkers kommun ,sjöutsikt"
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




