import Link from './Link'
import React from 'react'


const DropDownTillsyn = () => {
  return (
    <div className=" pb-10 px-2  md:grid  md:grid-cols-2 gap-20    relative">
<ul className="" >     {/* **** 01 */}
                <div>
                <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-400  ">
                    <summary className="  py-4    
                    cursor-pointer text-2xl text-gray-text leading-6"> Yttre tillsyn </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
           
                  Vi ser till ditt hus och tomt utifrån var fjärde eller varannan vecka, så att inget hänt som kräver åtgärd. Vi ser kontrollerar att alla dörrar är låsta över fönster, tak, fasad. Vi ser även till att inte möbler eller annat blåst omkring. 
                    
                        </div>
                 
                    </div>

                </details>

               </div>

               {/* ****02 */}
                <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6"> Inre Tillsyn </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
           Om ni önskar så erbjuder vi även en inre hustillsyn. Vi kan ta hand om post, vattna blommor, vädra, spola kranar och toaletter, kolla lampor.Vi kontrollerar värmen och att inga rör eller kranar läcker. 
                    
                        </div>
                 
                    </div>

                </details>

               </div>

               {/* ****03 */}
                 <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6"> Akuta åtgärder   </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
        
Vi tar hand om vissa typer av skador direkt, exempelvis torka upp vatten efter en läcka och sätta för en trasig fönsterruta Vid större åtgärdsbehov som om grenar eller träd fallit på tomten kan vi även ta hand om det eller vid behov hjälpa dig få tag i en lokal hantverkare.

                    
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
                    cursor-pointer text-2xl text-gray-text leading-6">Ta emot hantverkare </summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
      
Om du har behov av en större insats på din fastighet kan vi hjälpa dig med att kontakta hantverkare och även vara med och ta emot dem när de kommer.  
                    
                        </div>
                 
                    </div>

                </details>

               </div>
                 {/* ****05 */}
                         <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">Rapport</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
          
Efter varje hustillsyn får du en tillsynsrapport där vi har bockat av vad vi gjort på en checklista som även innehåller bilder och  eventuella upptäckter vi gör på ej akuta behov som ändå kan vara bra att känna till. Skulle vi upptäcka något akut kontaktar vi dig såklart omedelbart.

 <span className="font-semibold"> Om vi upptäckt något som kräver akut åtgärd kontaktar vi dig direkt</span>. Checklistan innehåller också två dagsfärska exteriörbilder.

                        </div>
                 
                    </div>

                </details>

               </div>
            
                 {/* ****06 */}
                         <div>
                <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-400   ">
                    <summary className=" py-4 
                    cursor-pointer text-2xl text-gray-text leading-6">övriga tjänster</summary>

                    <div className="mt-3">
                        <div className="text-gray-text text-base leading-6">
          Behöver altanen tvättas eller oljas in eller fönster pustsas inför våren?.  Kanske vill ni ta ner något träd eller fräsa bort några stubbar eller att vi skaffar lite ved?
Vi utför professionell trädfällning och stubbfräsning i sammarbete med Tommy Jansson <Link href="http://vedtradfallning.se/"> Trädfällning och Ved</Link> i Roslags Kulla. Vi lämnar alltid skriftlig offert på alla trädfällningar och stubbfräsning, oavsett storlek. 
                    
                        </div>
                 
                    </div>

                </details>

               </div> 
              
                </ul>
     </div>
  )
}

export default DropDownTillsyn