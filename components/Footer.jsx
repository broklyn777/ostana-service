import Link from 'next/link'
import siteMetadata from '../data/siteMetadata'
import SocialIcon from '../components/social-icons'

export default function Footer() {
  return (

    <footer>
      <div className=" flex flex-col border-t-2 h-20 border-gray-light items-center pt-4">
        <div className="mb-3 flex space-x-4">

     
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
          

        </div>
        <div className='flex flex-1'>
          <div className=" text-sm  text-gray-500 dark:text-gray-400">
            <Link href="">
             Lokalt |
            </Link>
          </div>
          <div>{`  `}</div>
          <div className=" text-sm px-2 text-gray-500 dark:text-gray-400">
            <Link href="">
              Östanå Gård |
            </Link>
          </div>
          <div>{`  `}</div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <Link href="https://vercel.com/dashboard">
            Åkersberga
            </Link>

          </div>
        </div>
      </div>
    </footer>



   
  )
}