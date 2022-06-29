import Image from 'next/image'
import React from 'react'
import SectionContainer from '../components/SectionContainer'

const Kontakt = () => {
    return (
        <>
            {/******************* Banner ************/}
            <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8  text-white py-16 relative">

                <div className="  ">
                    {/* <div className=" text-white " style={backgroundImageStyle}> */}
                    <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 mx-auto max-w-[1920px] ">
                        <Image
                            src="/img/städ-001.jpg"
                            className=" -z-[1001] "
                            alt="berg"
                            priority

                            layout="fill"
                            objectFit="cover"


                        />

                    </div>







                </div>

            </div>









        </>
    )
}

export default Kontakt