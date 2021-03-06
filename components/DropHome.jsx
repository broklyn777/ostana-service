import React from 'react'

const DropHome = () => {
  return (
    <div className=" py-10 relative">
        
        <div className="">
            <div className="max-w-4xl w-full relative leading-6">
                <h3 className="pt-2 text-3xl text-center mb-5 left-5">Vanliga frågor om vår  Hemservice</h3>
                   <div>
                <p className=" border-solid border-[1px] rounded-xl border-gray-text mx-auto max-w-[72px]"></p>
              </div>
{/* DropHome 1 */}
              <div className="grid grid-cols-1 gap-4">
<div>
                <details className="p-4 rounded-lg open:bg-pink-bg ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Hur arbetar ni? </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">
           
                         Vi erbjuder flera olika sorters tjänster inom trädgårdshjälp. 
                       
                         


                     <ul className=" px-4 list-disc
">
    <li>Enstaka uppdrag, löpande skötsel</li>
    <li>De flesta av momenten är RUT-berättigade</li>
<li> Hjälp med gräsklippning</li>
<li>Vi utför Häckklippning</li>

<li>Krattar löv och Rensar ogräs/ bortforsling</li>
<li> Vattnar din gräsmatta och trädgård</li>

                         </ul>


                        </p>
                 
                    </div>

                </details>

</div>

{/* DropHome 2 */}

<div className="">
                <details className="p-4 rounded-lg open:bg-pink-bg ">
                    <summary className=" pt-5 cursor-pointer text-2xl text-gray-text leading-6"> Tar ni med det ni behöver? </summary>

                    <div className="mt-3">
                        <p className="text-gray-text text-base leading-6">
           
                        Ja, vi tar med allt vi behöver så som gräsklippare, stegar, verktyg, gödsel, säckar etc. Vid vattning behöver ni dock tillhandahålla slang och tillgång till vatten.

                        </p>
                 
                    </div>

                </details>

</div>
{/* DropHome 3 */}

<div className="">
                <details className="p-4 rounded-lg open:bg-pink-bg ">
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

export default DropHome