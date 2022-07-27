import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { GiBeachBucket, GiClothesline, GiGardeningShears, GiHammerNails, GiRake, GiVacuumCleaner, GiVibratingSmartphone, GiWalk } from 'react-icons/gi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

import BannerHome from '../components/BannerHome'
import DropHome from '../components/DropHome'
import SectionContainer from '../components/SectionContainer'
import ServiceHome from '../components/ServiceHome'
import DropDownHome from '../components/DropDownHome'

const Home = () => {
  return (
    <>
      <NextSeo
        title="Trädgårdsskötsel | Tomt och hustillsyn | Östanå Hemservice"
        description="Östanå Hemservice hjälper dig med tillsyn av hus och tomt. Vi klipper gräs, blåser löv, rensar ogräs och röjer sly mm. RUT-avdrag. Alltid samma person."
        openGraph={{
          title: "prenumerera på vår trädgårdshjälp under hela säsongen.",
        }}
      />
      <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">
        <BannerHome />
      </div>

      <div className="py-2   bg-gray-light">
        <SectionContainer>

          <section className="">


            {/* DropDown 1 ***********************************/}
            <ServiceHome />

          </section>

        </SectionContainer>

      </div>









      {/* *************** Section 3 PINK ****************************/}

      <div className="py-2 relative bg-blue-bg ">
        <SectionContainer>

          <section className=" max-w-[400px] sm:max-w-none">
            <div className=" text-gray-text  grid gap-4 grid-cols-1  mt-6 md:mt-20 mb-4 md:mb-16">
              <h2 className=" text-center py-10 text-3xl lg:text-5xl">
                Varför Östanå Hemservice?

              </h2>
              <div>
                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
              </div>

              {/* flexbox LIST ****************/}
              <ul className="flex flex-col md:flex-row items-center md:justify-center md:items-start md:mt-0 md:ml-10 ">
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><HiOutlineChatAlt2 />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Samtal</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Berätta för oss vad du vill ha hjälp med så återkommer vi till dig med ett prisförslag antingen med fast pris eller pris per timme. </p>
                  </div>
                </li>
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><GiBeachBucket />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Arbetsplan</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Tillsammans kommer vi överens om en arbetsplan och ett tidsschema där vi anpassar oss efter dina behov.</p>
                  </div>
                </li>
                <li className="flex flex-col text-center items-center mt-12 md:ml-10 max-w-[310px] w-full">
                  <div className="flex text-white w-36 h-36 font-light rounded-full items-center justify-center  mb-10 bg-blue-bg-soft text-6xl"
                  ><GiGardeningShears />   </div>
                  <h3 className="text-lg font-semibold w-full uppercase relative m-0 ">Kontinuerligt underhåll</h3>
                  <div className=" leading-5 text-base w-full m-0 ">
                    <p>Samma trädgårdsarbetare återkommer för att hålla trädgården i trim.</p>
                  </div>
                </li>

              </ul>
            </div>




            {/* <DropDownHome /> */}


          </section>

        </SectionContainer>
      </div>
      <div className=" hidden md:block mx-auto -z-10 max-w-[1920px] ">
        <Image
          src="/img/blomma003.png"
          className=" "
          alt="trädgård,blomma, hemservice"
          height={1099}
          width={1914}




        />

      </div>
      <div className=" md:hidden mx-auto -z-10 max-w-[1920px] ">
        <Image
          src="/img/blomma.webp"
          className=" "
          alt="trädgård,blomma, hemservice"
          height={1099}
          width={1914}




        />

      </div>
      <div className="py-2 -mt-2 relative bg-pink-bg ">
        <div className="px-8">
          <DropDownHome />
        </div>
      </div>







    </>
  )
}

export default Home