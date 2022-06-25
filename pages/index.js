import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../components/Banner'


export default function Home() {
  return (
    <>
      <div className="-mt-20 md:mt-0 bg-gradient-to-r from-black px-8 text-white py-16 relative">
        <Banner />



        <div className="max-w-md mt-44 mb-16">
          <h2 className="text-5xl">
            Vad vill du ha hjälp med?


          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <h3 className="text-2xl font-bold mb-2">Seniorhjälp?</h3>
            <p className="text-lg">
              Det kan vara stort som smått, som att sy en knapp och sortera bokhyllan till att laga alla mål mat eller vara en ledande hand på promenaden i parken.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Våra trädgårdstjänster</h3>
            <p className="text-lg">
              Klippa gräs, rensa rabatter, kratta löv och beskära fruktträd? Självklart, det fixar vi! Boka ett engångsuppdrag eller prenumerera på vår trädgårdshjälp under hela säsongen.
            </p>
          </div>
        </div>

      </div>
    </>

  );
}
