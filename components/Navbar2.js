import Link from 'next/link'
import { useState } from "react";

const Navbar2 = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='h-20 z-50 md:bg-gray-200 bg-black/0 text-white md:text-gray-700  flex items-center justify-between text-2xl py-0   sm:py-0  '>
            <div className="px-5 ">
                <Link href="/">Östanå</Link>
            </div>

            <ul className=" text-base md:text-lg   hidden  md:block ">
                <li className="inline mr-8 hover:text-green-700   ">
                    <Link href="/it-data">IT & Data</Link>
                </li>

                <li className="inline mr-8 hover:text-green-700  ">
                    <Link href="/stadning">
                        <a>Städning</a>
                    </Link>
                </li>
                <li className="inline mr-8 hover:text-green-700  ">
                    <Link href="/tradgard">
                        <a>Trädgård</a>
                    </Link>
                </li>

                <li className="inline md:mr-8 hover:text-green-700  ">
                    <Link href="/om">
                        <a>Om oss</a>
                    </Link>
                </li>
                <li className="inline md:mr-8 hover:text-green-700  ">
                    <Link href="/pixagami">
                        <a>Pixa</a>
                    </Link>
                </li>



            </ul>
            {/* hamburger */}
            <div className="">
                <div className="md:hidden flex flex-col items-center justify-around w-8 cursor-pointer " onClick={() => setOpen(!open)}>
                    <div className="p-4 space-y-1.5 mr-6  ">
                        <span className="block w-8 h-1 rounded-lg bg-white animate-pulse"></span>
                        <span className="block w-8 h-1 rounded-lg bg-white animate-pulse"></span>
                        <span className="block w-8 h-1 rounded-lg bg-white animate-pulse"></span>
                    </div>
                </div>

                <ul onClick={() => setOpen(false)} className="md:hidden fixed h-[calc(100%-50px)] w-full flex flex-col items-center justify-around cursor-pointer bg-gray-600 text-neutral-100 px-0  " style={{ right: open ? "0px" : "-100vw" }}>
                    <li className="">
                        <Link href="/it-data">IT & Data</Link>
                    </li>
                    <li className="">
                        <Link href="/stadning">Städning</Link>
                    </li>
                    <li className="">
                        <Link href="/tradgard">Trädgård</Link>
                    </li>
                    <li className="">
                        <Link href="/tjanster">Fler tjänster</Link>
                    </li>
                    <li className="">
                        <Link href="/om">Om oss</Link>
                    </li>


                </ul>
            </div>

        </div>
    )
}

export default Navbar2