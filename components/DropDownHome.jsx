import Link from './Link'
import React from 'react'


const DropDownHome = () => {
  return (
    <div className=" pb-10 px-2  md:grid  md:grid-cols-2 gap-20    relative">
<ul className="" >     {/* **** 01 */}
                <div>
                <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-400  ">
                    <summary className="  py-4    
                    cursor-pointer text-2xl text-gray-text leading-6"> Trådlöst nätverk/Wifi </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
           
                Ibland fungerar inte ditt internet som den skall, det kan gälla ditt trådlösa nätverk och WiFi eller installation av ny router/modem eller att installera en skrivare på nätverket. Vi hjälper dig med enklare uppgifter som uppdateringar 
                    
                        </div>
                 
                    </div>

                </details>

               </div>

               {/* ****02 */}
                <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Full hårdisk</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
           Vi hjälper dig att rensa bort onödiga program och filer. Vid behov kan vi hjälpa er att installera en intern eller extern hårdisk.

 
                    
                        </div>
                 
                    </div>

                </details>

               </div>

               {/* ****03 */}
                 <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Hjälp med Skrivare  </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
        
     Krånglande skrivare? Vi hjälper dig med inställningar, uppdaterar drivrutiner och kollar skrivarens anslutningar.

                    
                        </div>
                 
                    </div>

                </details>

               </div>


</ul>

               {/* **** New column */}
               <ul>
           
  {/* ****04 */}
                         <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Mobiltelefon hjälp</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
      
Mobiltelefonen kan upplevas mer avancerad än en dator och det kan vara svårt att komma igång med vissa funktioner såsom nyhetsappar vädertjänster e-post mm. Vi på Östanå Hemservice hjälper dig gärna med bra tips som gör att du får ut mer av din telefon. Skriv gärna ner på ett vanligt papper vad du önskar få ut av din telefon eller vad som krånglar med mobiltelefonen. Steg för steg i lugn och ro hemma hos dig hjälper och handleder vi dig genom dina punkter och åtgärdar de behov som du önskar hjälp med. 
                    
                        </div>
                 
                    </div>

                </details>

               </div>
                 {/* ****05 */}
                         <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Installation av program</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
          
Vi hjälper till med installation av mjukvara/dataprogram såsom t.ex. Microsoft Word, Excel mm.
 
                        </div>
                 
                    </div>

                </details>

               </div>
            
                 {/* ****06 */}
                         <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">övriga IT-tjänster</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
         Data och IT tekniken hemma kanske fungerar precis som den ska, men är lite svår att förstå sig på. Då kan du få hjälp med just dina behov eller frågor. Vi handleder dig i användandet av exempelvis  bluetooth-uppkoppling, hörlurar, mobiltelefon, smartphone, dator, surfplatta, skrivare eller tv.
                    
                        </div>
                 
                    </div>

                </details>

               </div> 
              
                </ul>
     </div>
  )
}

export default DropDownHome