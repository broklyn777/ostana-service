import Link from 'next/link'


const Nav = () => {
    return (
        <div className="">
            <nav className="flex fixed w-full  min-w-[980px] items-center justify-center h-[90px] p-3 bg-neutral-900 text-white">
                <div className='block '></div>
                <ul className='flex justify-center items-center list-none'>
                    <li className="m-2 mx-4">
                        <Link href='/'>Hem</Link>
                    </li>
                    <li>
                        <Link href='/om'>Om oss</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav