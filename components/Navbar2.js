import Link from 'next/link'
import React from 'react'
import { useState } from "react";

const Navbar2 = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='h-20 w- bg-slate-400 text-gray-100 flex  items-center justify-between text-2xl py-0 px-28 relative overflow-hidden '>
            <Link href="/">Östanå</Link>


            <ul className="text-gray-100 flex text-lg ">
                <li className="inline mr-8  ">
                    <Link href="/it-data">IT & Data</Link>
                </li>

                <li className="inline mr-8  ">
                    <Link href="/stadning">
                        <a>Städning</a>
                    </Link>
                </li>
                <li className="inline mr-8  ">
                    <Link href="/tradgard">
                        <a>Trädgård</a>
                    </Link>
                </li>
                <li className="inline mr-8  ">
                    <Link href="/om">
                        <a>Om oss</a>
                    </Link>
                </li>
                <li className="inline mr-8  ">
                    <Link href="/kontakt">
                        <a>Kontakt</a>
                    </Link>
                </li>


            </ul>
            {/* hamburger */}

            <div className="hidden w-6 h-5 cursor-pointer" onClick={() => setOpen(!open)}>
                <div className="w-full h-1 bg-white" />
                <div className="w-full h-1 bg-white" />
                <div className="w-full h-1 bg-white" />
            </div>

            <ul onClick={() => setOpen(false)} className="hidden fixed w-1/2 h-[calc(100%_-_50px)] " style={{ right: open ? "0px" : "-50vw" }}>
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
                <li className="">
                    <Link href="/kontakt">Kontakt</Link>
                </li>

            </ul>


        </div>
    )
}

export default Navbar2