import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from '../components/Link'

import { FaAngleRight } from 'react-icons/fa'
import { GiBeachBucket, GiGardeningShears, GiRake, GiVacuumCleaner } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import BannerTradgard from '../components/BannerTradgard'
import DropDownTradgard from '../components/DropDownTradgard'
import BjProfil from '../components/BjProfil'

import SectionContainer from '../components/SectionContainer'


const tradgard = () => {
    return (
        <>
            <NextSeo
                title="Trädgårdshjälp | Hjälp med min trädgård | Östanå Hemservice"
                description="Behöver du trädgårdshjälp? Östanå Hemservice hjälper dig. Vi fräser stubbar, krattar löv, vattnar, klipper gräsmattor och rabatter mm. Även trädfällning."
                openGraph={{
                    title: "Vi erbjuder trädgårdshjälp under hela säsongen.",
                }}
            />

            <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">
                <BannerTradgard />
            </div>


            <SectionContainer>
                <section className="">
                    <BjProfil />
                    <div className=" text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
                        <h1 className="pt-10  text-3xl md:text-5xl">
                            Trädgårdshjälp med RUT-avdrag
                        </h1>
                        <div>
                            <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                        </div>
                        <div className=" mx-auto text-center max-w-2xl">
                            <p >Östanå Hemservice erbjuder en bekymmersfri vardag med Lokal trädgårdshjälp i <Link className="text-orange-600 font-medium" href="/tradgardshjalp/akersberga"> Åkersberga</Link>, <Link className="text-orange-600 font-medium" href="/tradgardshjalp/ljustero">Ljusterö</Link> <Link className="text-orange-600 font-medium" href="/tradgardshjalp/norrtalje">och  Norrtälje</Link> . Vi hjälper er med att Klippa gräs, kratta löv eller ihopsamling av trädgårdsavfall. Vi har alltid med oss alla maskiner och redskap som behövs och vi tar med oss avfallet ifall ni önskar.</p>
                        </div>



                    </div>
                    <DropDownTradgard />
                    {/* <div className="py-2 -mt-2 relative ">
                        <div className="px-8">
                            <DropTradgard />
                        </div>
                    </div> */}

                </section>

            </SectionContainer>
            <div className="  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/parkröjning-furusund_.webp"
                    className=" "
                    alt="trädgård,blomma, hemservice"
                    height={1099}
                    width={1914}




                />

            </div>

            {/* *************** Section 3 PINK ****************************/}

            <div className="py-4 -mt-2 relative bg-green-bg ">
                <SectionContainer>

                    <section className=" max-w-[400px] sm:max-w-none">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
                            <h2 className=" text-center pt-12 text-3xl lg:text-5xl">
                                Så fungerar trägårdshjälpen

                            </h2>
                            <div>
                                <div className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></div>
                            </div>
                            <p className="text-center"> Boka ett  engångsuppdrag eller prenumerera på vår trädgårdshjälp under hela säsongen.</p>
                            {/* flexbox LIST ****************/}
                            <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-green-bg-soft text-6xl"
                                    ><HiOutlineChatAlt2 />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Samtal</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p>Berätta för oss vad du vill ha hjälp med så återkommer vi till dig med ett prisförslag.</p>
                                    </div>
                                </li>
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-green-bg-soft text-6xl"
                                    ><GiBeachBucket />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Arbetsplan</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p>Tillsammans kommer vi överens om skötselplan och tidsåtgång, så att vi kan möta dina önskemål på bästa sätt. Endast vid prenumeration. </p>
                                    </div>
                                </li>
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-green-bg-soft text-6xl"
                                    ><GiGardeningShears />   </div>
                                    <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Kontinuerligt underhåll</h3>
                                    <div className=" leading-5 text-base w-full m-0 ">
                                        <p> Samma trädgårdsarbetare återkommer för att hålla trädgården i trim. Endast vid prenumeration.</p>
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

export default tradgard