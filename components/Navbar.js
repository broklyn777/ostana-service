/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav className="w-full fixed top-0 bg-gray-200 z-10 dark:bg-slate-900">
                <div className="container mx-auto py-5 flex items-center justify-between">

                    <div>
                        {/* ändrat emot tims orginalet */}
                        <Link href="/" src="./img/logo.png" aria-label="Roligare">
                            <div className="flex items-center justify-between">

                                <div className="mr-3">



                                    {/* <Logo /> */}
                                </div>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <img className="w-8" src="./img/logo.png" alt="" />
                                    <span className="text-2xl font-bold text-gray-700 dark:text-white"
                                    >Östanå</span>
                                </div>


                            </div>
                        </Link>
                    </div>

                    <ul
                        className="hidden md:flex space-x-10 items-center text-gray-600 dark:text-gray-100 font-bold text-sm "
                    >
                        <li className="hover:text-gray-500">
                            <Link href='/stadning'>Städning</Link>
                        </li>

                        <li className="hover:text-gray-500">
                            <Link href='/tjanster'>Tjänster</Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link href='/om'>Om oss</Link>
                        </li>



                        <Link href='/om'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                                Home
                            </a>
                        </Link>
                    </ul>
                    <img
                        id="moon"
                        src="./img/moon.png"
                        className="hidden md:block w-5 cursor-pointer"
                        alt=""
                    />
                    <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>
                    <ul
                        id="menu"
                        className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
                    >
                        <li>
                            <a id="hLink" href="#">homepage</a>
                        </li>
                        <li>
                            <a id="hLink" href="#about">about me</a>
                        </li>
                        <li>
                            <a id="hLink" href="#services">services</a>
                        </li>
                        <li>
                            <a id="hLink" href="#works">works</a>
                        </li>
                        <li>
                            <a id="hLink" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </nav>



        </div>
    )
}

export default Navbar