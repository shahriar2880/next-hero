"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title : "About",
            path : '/about'
        },
        {
            title : "Services",
            path : '/services'
        },
        {
            title : "Contact",
            path : '/contacts'
        },
        {
            title : "Blogs",
            path : '/blogs'
        },
    ]
    const handlerLogin =() =>{
        router.push('/login')
    }
  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
    <h6 className='text-3xl'>Next <span className='text-cyan-700'>Hero</span></h6>
    <ul className='flex justify-between items-center space-x-4'>
      {
        links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-700"}`} key={link.path} href={link.path}>{link.title}</Link>)
      }
    </ul>
    <button onClick={handlerLogin} className='bg-white text-cyan-700 p-3'>LogIn</button>
  </nav>
  )
}

export default Navbar
