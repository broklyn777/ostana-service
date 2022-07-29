import Image from 'next/image'


import { SiMaildotru } from 'react-icons/si'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import SectionContainer from '../components/SectionContainer'
import ServiceOm from '../components/ServiceOm'
import DropOm from '../components/DropOm'


const Om = () => {
    return (<>
        {/******************* Banner ************/}
        < div className="-mt-20 min-h-[300px] md:mt-0  px-8  text-white py-16 relative" >

            <div className="space-y-6  ">
                {/* <div className=" text-white " style={backgroundImageStyle}> */}
                <div className="absolute top-0 right-0 bg-green-bg left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">


                </div>



                <div className=" text-white px-8 text-center pt-6  -z-20">

                    <h1 className=" tracking-tight text-4xl md:text-6xl md:font-normal">
                        Kontakta oss
                    </h1>

                </div>
                <div>
                    <p className=" border-[1px] rounded-xl border-white mx-auto max-w-[72px]"></p>
                </div>

                <p className="text-center text-base ">Har du frågor eller funderingar - tveka inte att höra av dig till oss.</p>

            </div>





        </div>
        {/* mobile */}
        <div className=" md:hidden mx-auto -z-10 max-w-[1920px] ">
            <Image
                src="/img/personalostana-003.webp"
                className=" "
                alt=""
                height={1199}
                width={1920}




            />
            {/* desktop */}
        </div>
        <div className=" hidden md:block mx-auto -z-10 max-w-[1920px] ">
            <Image
                src="/img/personalostana-003.webp"
                className=" "
                alt=""
                height={1199}
                width={1920}




            />

        </div>
        {/* *************** Section 3 PINK ****************************/}

        <div className=" bg-gray-light relative  ">
            <SectionContainer>

                <section className=" max-w-[400px] sm:max-w-none">
                    <div className=" text-gray-text py-10  grid gap-2 grid-cols-1  -mt-4  mb-4 md:mb-16">



                        {/* flexbox LIST ****************/}
                        <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                            <li className="flex flex-col text-center items-center  mt-4 md:mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-white w-20 h-20 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-green-bg-soft text-4xl lg:text-6xl"
                                ><SiMaildotru />   </div>
                                <h3 className="md:text-lg  text-base w-full  relative m-0 ">info@ostanahemservice.se</h3>

                            </li>
                            <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-white w-20 h-20 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-green-bg-soft text-4xl lg:text-6xl"
                                ><MdLocationPin />   </div>
                                <h3 className="md:text-lg  text-base w-full  relative m-0 ">Östanå Roslags Kulla</h3>

                            </li>
                            <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-white w-20 h-20 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-green-bg-soft text-4xl lg:text-6xl"
                                ><FaPhoneAlt />   </div>
                                <h3 className="md:text-lg  text-basef w-full  relative m-0 ">070-689 89 99</h3>

                            </li>

                        </ul>
                    </div>







                </section>

            </SectionContainer>
        </div>

        <ServiceOm />

        {/* mobile */}
        <div className=" md:hidden mx-auto -z-10 max-w-[1920px] ">
            <Image
                src="/img/blomma-kontakt.png"
                className=" "
                alt=""
                height={1199}
                width={1920}




            />
            {/* desktop */}
        </div>
        <div className=" hidden md:block mx-auto -z-10 max-w-[1920px] ">
            <Image
                src="/img/blomma-kontakt@2x.png"
                className=" "
                alt=""
                height={1199}
                width={1920}




            />

        </div>

        <div className="py-2 -mt-2 -mb-1  relative  bg-pink-bg ">
            <div className="px-8">
                <DropOm />
            </div>
        </div>



    </>




    )
}

export default Om