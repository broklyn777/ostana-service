import Link from './Link'

const DDownKontakt = () => {
  return (
    <div className="pb-10 px-2 md:px-6 font-normal md:grid text-2xl md:grid-cols-2 gap-20 relative">
      <ul className="">
        {/* **** 01 */}
        <div>
          <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-gray-text leading-6">
              Östanå Hemservice
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Välkommen till Östanå Hemservice – din lokala expert på trädgårdsskötsel i Österåkers kommun, Åkersberga. Vi erbjuder professionella tjänster som gräsklippning, slyröjning, lövkrattning och lövblåsning. Vår passion och erfarenhet säkerställer att din trädgård alltid är i toppskick.
              </div>
            </div>
          </details>
        </div>

        {/* ****02 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Gräsklippning och Slyröjning
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Jag heter Björn Jansson och jag har ägnat en stor del av mitt liv åt trädgårdsskötsel. Jag har över 30 års erfarenhet av att klippa gräs och röja sly och jag tar hand om varje trädgård som om det vore min egen. När du anlitar mig för dina trädgårdsbehov, kan du vara säker på att du alltid kommer att träffa mig - inte någon anställd eller underleverantör. Jag erbjuder både gräsklippning och slyröjning och om du behöver det kan jag även ta hand om bortforsling. Kontakta mig idag för att diskutera dina behov.
              </div>
            </div>
          </details>
        </div>

        {/* ****03 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Lövkrattning och Lövblåsning
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                På hösten kan lövfall bli ett problem. Vi erbjuder lövkrattning och lövblåsning för att hålla din trädgård och utomhusytor rena och prydliga. Vi tar hand om allt, från lövinsamling till bortforsling.              

              </div>
            </div>
          </details>
        </div>
      </ul>

      {/* **** New column */}
      <ul>
        {/* ****04 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary 
            className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Skräddarsydda Tjänster
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Vi förstår att varje trädgård har sina egna unika behov. Därför erbjuder vi skräddarsydda tjänster som är anpassade efter dina specifika önskemål. Oavsett om du behöver regelbunden gräsklippning, enstaka slyröjning eller lövkrattning och lövblåsning under höstsäsongen, är vi här för att hjälpa till.
              </div>
            </div>
          </details>
        </div>

        {/* ****05 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Kontakta oss
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Vill du att din trädgård ska se sitt bästa ut? Kontakta Östanå Hemservice idag för att få mer information om våra tjänster, eller för att boka en tid. Vi ser fram emot att hjälpa dig med dina trädgårdsbehov och göra din utomhusmiljö så inbjudande som möjligt.
              </div>
            </div>
          </details>
        </div>
      </ul>
    </div>
  )
}

export default DDownKontakt
