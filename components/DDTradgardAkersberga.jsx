import Link from './Link'
import React from 'react'


const DropDown = () => {
  return (
    <div className=" pb-10 px-2 md:px-6 font-normal  md:grid text-2xl md:grid-cols-2 gap-20   relative">
<ul className="" >     {/* **** 01 */}
                <div>
                <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-light   ">
                    <summary className="  py-4    
                    cursor-pointer  text-gray-text leading-6"> Kratta löv </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
           
                         Vi erbjuder flera olika sorters tjänster inom <span className="font-semibold">trädgårdshjälp i Åkersberga </span> med omnejd. Vi hjälper gärna till med att kratta löven, samla ihop höstlöven till kompost eller Bortforsling. <span className="font-semibold">Bortforsling </span> är dock ej giltigt för  RUT-avdrag.
                    
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
  )
}

export default DropDown