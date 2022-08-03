import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Cta() {
  return (
     <div className="pb-5    text-center">
  
        <button className="  grid grid-cols-3 gap-2 items-center text-center bg-gradient-to-r from-pink-600 to-orange-600 py-2 cursor-pointer px-3 text-lg rounded-md   "> 
         

        <div className="  text-3xl">
      <FaPhoneAlt className=""   /> 
      </div>
      <div className="col-span-2 ">
          <p>Björn Jansson</p>
        <Link href="tel:0706898999">070-689 89 99</Link> 
  
      </div>
       
        </button>
        </div>
  )
}
