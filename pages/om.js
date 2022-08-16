import Image from 'next/image'
import Link from '@/components/Link'

import { SiMaildotru } from 'react-icons/si'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import SectionContainer from '../components/SectionContainer'
import ServiceOm from '../components/ServiceOm'
import DropOm from '../components/DropOm'

import ServiceHome from '@/components/ServiceHome'


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

                <p className="text-center text-base  ">Har du en fråga om våra tjänster eller undrar då på något angående Rut-avdrag?  Du är alltid välkommen att höra av dig till  <span className="">  Björn Jansson på
                    <Link className="text-orange-600 font-medium" href="tel:0706898999"  > 070-689 89 99 </Link></span>  eller
                    <span className="">
                        <Link className="text-orange-600 font-medium" href="mailto:info@ostanahemservice.se" >  info@ostanahemservice.se</Link></span>
                </p>




            </div>






        </div>

        {/* mobile */}
        <div className="  mx-auto -z-10 max-w-[1920px] ">
            <Image
                src="https://res.cloudinary.com/einar/image/upload/v1660602354/%C3%B6stan%C3%A5%20service/bjprofil-002_av3xes.webp"
                className=" "
                alt=""
                height={1199}
                width={1920}




            />

        </div>



        <ServiceHome />
        {/* *************** Section 3 PINK ****************************/}

        <div className=" bg-orange-100 relative  ">
            <SectionContainer>

                <section className=" max-w-[400px] sm:max-w-none">
                    <div className=" text-gray-text py-10  grid gap-2 grid-cols-1  -mt-4  mb-4 ">



                        {/* flexbox LIST ****************/}
                        <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                            <li className="flex flex-col text-center items-center  mt-4 md:mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-gray-text w-24 h-24 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-orange-50 text-4xl lg:text-6xl"
                                ><SiMaildotru />   </div>
                                <h3 className="md:text-lg  text-base w-full  relative m-0 ">info@ostanahemservice.se</h3>

                            </li>
                            <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-gray-text w-24 h-24 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-orange-50 text-4xl lg:text-6xl"
                                ><MdLocationPin />   </div>
                                <h3 className="md:text-lg  text-base w-full  relative m-0 ">Östanå Roslags Kulla</h3>

                            </li>
                            <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                                <div className="flex text-gray-text w-24 h-24 lg:w-32 lg:h-32 font-light rounded-full items-center justify-center  mb-4 bg-orange-50 text-4xl lg:text-6xl"
                                >
                                    <FaPhoneAlt />   </div>
                                <h3 className="md:text-lg  text-basef w-full  relative m-0 "> <Link href="tel:0706898999">070-689 89 99</Link></h3>

                            </li>

                        </ul>
                    </div>







                </section>

            </SectionContainer>
        </div>



        <div className="py-2 -mt-4 -mb-1  relative  bg-green-bg-soft ">
            <div className="px-8">
                <DropOm />
            </div>
        </div>



    </>




    )
}

export default Om