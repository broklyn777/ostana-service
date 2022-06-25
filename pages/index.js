import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'


export default function Home() {
  return (

    <div className="items-center">
      <Banner />
      <h2 className='text-5xl text-center'>Hello Östanå</h2>

    </div>
  )
}
