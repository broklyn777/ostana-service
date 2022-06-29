import Link from "next/link"


const DropTillsyn = () => {
  return (
    <div className=" py-10 relative">
        
        <div className="">
            <div className="max-w-4xl w-full relative leading-6">
                  <h3 className="pt-2 text-3xl text-center mb-5 left-5">Vanliga frågor om vår hjälp med tillsyn av fastighet</h3>
                   <div>
                <p className=" border-solid border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
              </div>
{/* DropHome 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div>
                <details className="p-4 rounded-lg  ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Vad ingår i hustillsyn med RUT-avdrag? </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">

                    Några exempel på tjänster vi utför med <span className="font-semibold" >RUT-avdrag</span>  är att ta hand er post, hjälpa till med att vattna blommor, vädra, spola kranar och toaletter, byta ut trasiga lampor sätta på och stänga av vatten och värme för säsongen. Ta hand om vissa typer av skador, exempelvis torka upp vatten efter en läcka och sätta för en krossad fönsterruta
                                    ta emot varubud och hantverkare.
                                  
                                

                        </p>
                 
                    </div>

                </details>

</div>

{/* DropHome 2 */}

<div className="">
                <details className="p-4 rounded-lg ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Endast hjälp med tillsyn utomhus? </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">
           
                       Vi anpassar oss till dina behov och önskningar. Kanske behöver du endast hjälp med tillsyn av fastigheten utomhus. Vi ser då till att inte möbler eller annat blåst omkring. Vi kontrollerar så att alla dörrar är låsta. Skulle något fönster eller liknande vara trasigt gör vi omgående en tillfällig lagning. Vid önskamål, tex efter en storm, ser vi även till så att inga synliga skador finns på tak, fasad mm. Kanske behöver du även hjälp med gräsklippning, fönsterputs, snöskottning? 
                        </p>
                 
                    </div>

                </details>

</div>
{/* DropHome 3 */}

{/* <div className="">
                <details className="p-4 rounded-lg ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Får jag RUT-avdrag på bevakningstjänster </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">
           
               Inget avdrag ges för att
utföra vakt- och bevakningstjänster
installera och utföra kameraövervakning
installera larm eller betala för abonnemang och utryckningar
utföra reparationer och underhåll, göra ombyggnad eller tillbyggnad.
        

                        </p>
                 
                    </div>

                </details>

</div> */}
{/* DropHome 3 */}

<div className="">
                <details className="p-4 rounded-lg ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Kan ni komma ut och titta innan ni lämnar prisförslag? </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">
           
                     Om uppdraget kräver ett kundbesök, så kommer vi självklart ut och tittar. Annars räcker det oftast med en beskrivning och eventuellt bild som du kan skicka till oss, så återkommer vi med ett prisförslag till dig.

                        </p>
                 
                    </div>

                </details>

</div>

            </div>



        </div>
        </div>
        
        </div>
  )
}

export default DropTillsyn