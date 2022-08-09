

import Image from 'next/image'
import Link from '@/components/Link'
import { FaRegCheckCircle } from 'react-icons/fa'



import Cta from '@/components/Cta'
import SectionContainer from '@/components/SectionContainer'
import DDTradgardAkersberga from '@/components/DDTradgardAkersberga'
import { NextSeo } from 'next-seo'

const norrtalje = () => {
    return (
        <>
            <NextSeo
                title="Trädgårdshjälp i Norrtälje | Östanå Hemservice"
                description="Behöver du trädgårdshjälp i Norrtälje? Få gratis offert! Stubbfräsning, lövkrattning, gräsklippning, trädfällning och mycket mer!"
                openGraph={{
                    title: "Vi erbjuder tomt och trädgårdsservice i Norrtälje under hela året.",
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
                            alt="trädgårdshjälp norrtalje"


                            layout="fill"
                            objectFit="cover"


                        />

                    </div>

                    <h1 className="font-normal pl-8 hidden md:block">Trädgårdshjälp Norrtälje</h1>
                    <h1 className="font-normal md:hidden">Trädgårdshjälp Norrtälje</h1>


                    <div className=" text-white px-8 py-16 mt-7 -z-20">

                        <div className=" max-w-xl grid grid-cols-1 gap-8 mb-8">

                            <h2 className=" text-4xl md:text-6xl md:font-normal">
                                Behöver du hjälp med din trädgård?
                            </h2>

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
                                Trädgårdsservice nära dig


                            </h2>
                            <div>
                                <p className=" border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
                            </div>
                            <div className=" mx-auto text-center max-w-2xl">


                                <p>
                                    Östanå Hemservice erbjuder bekymmersfri vardag med vår trädgårdsservice. Vi hjälper er med att Klippa gräs, blåsa och kratta löv eller ihopsamling av trädgårdsavfall i Norrtälje kommun. Vi har alltid med oss alla maskiner och redskap som behövs och vi tar med oss avfallet ifall ni önskar.<span className=""><br /> Björn Jansson
                                        <Link className="text-orange-600 font-medium" href="tel:0706898999"  > 070-689 89 99</Link></span>.

                                </p>




                            </div>
                        </div>




                        <div className=" pb-10 px-2 md:px-6 font-normal  md:grid text-2xl md:grid-cols-2 gap-20   relative">
                            <ul className="" >     {/* **** 01 */}
                                <div>
                                    <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className="  py-4    
                    cursor-pointer  text-gray-text leading-6"> Kratta löv </summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">

                                                Bor du i Norrtälje kommun och behöver städa tomten från årets löv? Vi hjälper gärna till med att blåsa bort löv från gräsmattan och grusgångar,lövkrattning och/eller samla ihop höstlöven till kompost eller för bortforsling.  <span className="font-semibold">Bortforsling </span> är dock ej giltigt för  RUT-avdrag.

                                            </div>

                                        </div>

                                    </details>

                                </div>

                                {/* ****02 */}
                                <div>
                                    <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6"> Klippa gräs </summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">
                                                Att ta hjälp med gräsklippningen är bra sätt att se till att gräsmattan blir sådär härligt grön och fin. Vi på Östanå Hemservice erbjuder regelbunden gräsklippning hjälpa dig  att få en grön och tät gräsmatta. Att boka gräsklippning är enkelt, och en av våra mest populära tjänster. Vi kan snabbt hjälpa till när tiden blir knapp, eller arbetet lite för tungt för att klara på egen hand. Hos oss bestämmer du själv hur ofta du vill ha hjälp.

                                            </div>

                                        </div>

                                    </details>

                                </div>

                                {/* ****03 */}
                                <div>
                                    <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Röjning av sly  </summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">
                                                Önskar du röjning på din tomt för bättre utsikt eller vill du ta bort sly och långt gräs för att de träd och växter du vill ha kvar ska få mer näring och växa bättre?
                                                Alla växter, buskar och träd behöver sol och ljus för att må bra, med Östanå Hemservice tomtröjning kan du skapa din egen underbara oas på tomten.
                                                Vi hjälper dig gärna så att din tomt och trädgård blir så vacker som möjligt.

                                            </div>

                                        </div>

                                    </details>

                                </div>


                            </ul>

                            {/* **** New column */}
                            <ul>

                                {/* ****04 */}
                                <div>
                                    <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6"> Hjälp med att vattna </summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">

                                                Vatten är en mycket viktig del i skötsel av gräs, en del av underhållet på din tomt som vi ofta hjälper till med. I de flesta fall så kan man utgå från att plantan behöver ca 25 mm vatten i veckan under växtsäsongen. Vid vattning behöver ni dock tillhandahålla slang och tillgång till vatten.

                                            </div>

                                        </div>

                                    </details>

                                </div>
                                {/* ****05 */}
                                <div>
                                    <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Fräsa stubbar</summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">

                                                Stubbfräsning är ett miljövänligt sätt att bli av med stubbar. När stubben är fräst återstår endast en hög med flis och en grop. Fyll hålet med jord och rulla ut eller så nytt gräs.Det går även bra att använda till i komposten eller rabatter. Om det gäller svårare trädfällningar eller stubbfräsning så sammarbetar vi med Tommy Jansson <Link href="http://vedtradfallning.se/"> Trädfällning och Ved</Link> i Roslags Kulla.

                                            </div>

                                        </div>

                                    </details>

                                </div>

                                {/* ****06 */}
                                <div>
                                    <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light   ">
                                        <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Trädfällning</summary>

                                        <div className="mt-3">
                                            <div className="text-gray-text text-base leading-6">

                                                Vi utför professionell trädfällning i sammarbete med Tommy Jansson <Link href="http://vedtradfallning.se/"> Trädfällning och Ved</Link> i Roslags Kulla. Vi lämnar alltid skriftlig offert på alla trädfällningar, oavsett storlek.

                                            </div>

                                        </div>

                                    </details>

                                </div>

                            </ul>
                        </div>
                    </section>

                </SectionContainer>

            </div>

            <div className="  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/rialav-1st.webp"
                    className=" "
                    alt="trädgårdshjälp norrtälje, före tomtröjning av sly och gräs"
                    height={1099}
                    width={1914}




                />

            </div>
            <div className=" -mt-2  mx-auto -z-10 max-w-[1920px] ">
                <Image
                    src="/img/rialav-2nd.webp"
                    className=" "
                    alt="trädgårdshjälp norrtalje, tomtröjning av sly och gräs"
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

export default norrtalje




