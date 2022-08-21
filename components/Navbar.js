import Link from 'next/link'
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' w-screen max-w-[1920px] h-20 md:bg-gray-light bg-black/0 text-white md:text-gray-text flex items-center justify-between text-2xl py-0    '>
            <div className="px-5 z-10">
                <Link href="/">Östanå Hemservice</Link>
            </div>

            <ul className=" text-base md:text-lg hidden  md:block ">
                <li className="inline mr-8 hover:text-green-700 ">
                    <Link href="/it-data">IT & Data</Link>
                </li>
                {/* 
                <li className="inline mr-8 hover:text-green-700  ">
                    <Link href="/stadning">
                        <a>Städning</a>
                    </Link>
                </li> */}
                <li className="inline mr-8 hover:text-green-700  ">
                    <Link href="/tradgardshjalp">
                        <a>Trädgård</a>
                    </Link>
                </li>

                <li className="inline md:mr-8 hover:text-green-700  ">
                    <Link href="/tillsyn-av-fastighet">
                        <a>Hustillsyn</a>
                    </Link>
                </li>

                <li className="inline md:mr-8 hover:text-green-700  ">
                    <Link href="/kontakt">
                        <a>Kontakt</a>
                    </Link>
                </li>

            </ul>
            {/* hamburger */}
            <div className="z-20">
                <div className="md:hidden flex flex-col items-center justify-around w-8 cursor-pointer " onClick={() => setOpen(!open)}>
                    <div className="p-4 space-y-1.5 mr-6  ">
                        <span className="block w-8 h-1 rounded-lg bg-white "></span>
                        <span className="block w-8 h-1 rounded-lg bg-white "></span>
                        <span className="block w-8 h-1 rounded-lg bg-white "></span>
                    </div>
                </div>

                <ul onClick={() => setOpen(false)} className="fixed h-[calc(100%-50px)] w-full flex flex-col items-center justify-around cursor-pointer bg-black/90 text-neutral-100 px-0  " style={{ right: open ? "0px" : "-120vw" }}>
                    <li className="">
                        <Link href="/">Hem</Link>
                    </li>
                    <li className="">
                        <Link href="/it-data">IT & Data</Link>
                    </li>
                    {/* <li className="">
                        <Link href="/stadning">Städning</Link>
                    </li> */}
                    <li className="">
                        <Link href="/tradgardshjalp">Trädgård</Link>
                    </li>
                    {/* <li className="">
                        <Link href="/tjanster">Fler tjänster</Link>
                    </li> */}
                    <li className="">
                        <Link href="/tillsyn-av-fastighet">Hustillsyn</Link>
                    </li>
                    <li className="">
                        <Link href="/kontakt">Kontakt</Link>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Navbar