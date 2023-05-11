import Link from './Link'

const GrasklippningAkersberga = () => {
  return (
    <div className="pb-10 px-2 md:px-6 font-normal md:grid text-2xl md:grid-cols-2 gap-20 relative">
      <ul className="">
        {/* **** 01 */}
        <div>
          <details className="p-4 pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-gray-text leading-6">
              Gräsklippning Åkersberga
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Välkommen till Gräsklippning Åkersberga – din lokala expert på
                gräsklippning och trädgårdsskötsel. Vi erbjuder professionell
                gräsklippning och grästrimning för att ge din trädgård den
                omsorg den förtjänar. Med vår hjälp kommer din gräsmatta att
                se fantastisk ut under hela säsongen. Vi är stolta över att
                erbjuda högkvalitativa tjänster till konkurrenskraftiga priser
                och med RUT-avdrag.
              </div>
            </div>
          </details>
        </div>

        {/* ****02 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Klippa gräs Åkersberga
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Låt oss ta hand om gräsklippningen så att du kan njuta av din
                fritid. Vi erbjuder flexibla lösningar för att klippa ditt gräs
                och anpassar oss efter dina behov och önskemål. Våra
                erfarna trädgårdsproffs kommer att klippa, trimma och
                underhålla din gräsmatta så att den alltid ser sitt bästa ut.
              </div>
            </div>
          </details>
        </div>

        {/* ****03 */}
        <div>
          <details className="p-4 items-center pb-0 border-b-2 open:pb-4 border-gray-light">
            <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
              Trimma gräs Åkersberga
            </summary>

            <div className="mt-3">
              <div className="text-gray-text text-base leading-6">
                Grästrimning är en viktig del av trädgårdsskötseln och ger din
                gräsmatta det där lilla extra. Vi på Gräsklippning Åkersberga
                har lång erfarenhet av att trimma gräs och kan hjälpa dig att
                skapa en             trädgård som ser både snygg och välklippt ut. Vi använder oss av professionell utrustning för att trimma gräs längs kanter, runt träd och i svåråtkomliga hörn där gräsklipparen inte kommer åt. Genom att kombinera gräsklippning och grästrimning kommer din trädgård att få en enhetlig och välskött look som kommer att imponera på grannarna.
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
        <summary className="py-4 cursor-pointer text-2xl text-gray-text leading-6">
          Anpassade tjänster
        </summary>

        <div className="mt-3">
          <div className="text-gray-text text-base leading-6">
            Vi förstår att varje trädgård är unik, och därför erbjuder vi anpassade tjänster för att passa just dina behov. Oavsett om du behöver hjälp med gräsklippning, grästrimning eller båda, kan vi skräddarsy en lösning som passar dig. Tveka inte att kontakta oss för att diskutera dina önskemål och få en offert anpassad efter dina specifika behov.
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
            Är du redo att förvandla din trädgård och njuta av en vacker och välskött gräsmatta? Kontakta Gräsklippning Åkersberga idag för att få mer information om våra tjänster, boka en tid eller få en offert. Vi ser fram emot att hjälpa dig med dina trädgårdsbehov och göra din trädgård så fantastisk som möjligt.
          </div>
        </div>
      </details>
    </div>
  </ul>
</div>
)
}

export default GrasklippningAkersberga
