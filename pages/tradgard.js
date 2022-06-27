import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { GiBeachBucket, GiGardeningShears, GiRake, GiVacuumCleaner } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import BannerTradgard from '../components/BannerTradgard'
import SectionContainer from '../components/SectionContainer'

const tradgard = () => {
    return (
        <>
            <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">
                <BannerTradgard />
            </div>


            <SectionContainer>
                <section className="">
                    <div className=" text-gray-text  grid gap-4 grid-cols-1 text-center mt-6 md:mt-20 mb-4 md:mb-16">
                        <h2 className="pt-10  text-3xl md:text-5xl">
                            Vad ingår i trädgårdshjälp?
                        </h2>
                        <div>
                            <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                        </div>
                        <div className=" mx-auto text-center max-w-2xl">
                            <p >Klippa gräs, rensa rabatter, kratta löv och beskära fruktträd? Självklart, det fixar vi! Boka ett engångsuppdrag eller prenumerera på vår trädgårdshjälp under hela säsongen.</p>
                        </div>
                    </div>



                </section>

            </SectionContainer>


            {/* *************** Section 3 PINK ****************************/}

            <div className="py-2 relative bg-green-bg ">
                <SectionContainer>

                    <section className=" max-w-[400px] sm:max-w-none">
                        <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
                            <h2 className=" text-center py-12 text-3xl lg:text-5xl">
                                Så fungerar trägårdshjälpen

                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>

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
                                        <p>Tillsammans kommer vi överens om skötselplan och tidsåtgång, så att vi kan möta dina önskemål på bästa sätt.</p>
                                    </div>
                                </li>
                                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                    <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-green-bg-soft text-6xl"
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









        </>
    )
}

export default tradgard